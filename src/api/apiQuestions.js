import { shuffleQuestions } from '../helpers/shuffleQuestions';
import supabase from './supabase';

export async function getQuestions(
	categoryId = 1,
	limit,
	difficultyLevel = 'easy'
) {
	let query = supabase.from('questions').select('*');

	if (categoryId) {
		query = query.eq('categoryId', categoryId);
	}

	if (difficultyLevel) {
		query = query.eq('difficultyLevel', difficultyLevel);
	}

	if (limit) {
		query = query.limit(limit);
	}

	const { data: questions, error: questionsError } = await query.select('*');

	if (questionsError) {
		console.log(`Error fetching questions: ${questionsError.message}`);
		return [];
	}

	for (let i = 0; i < questions.length; i++) {
		const questionId = questions[i].id;

		const { data: answers, error: answersError } = await supabase
			.from('answers')
			.select('*')
			.eq('questionId', questionId);

		if (answersError) {
			console.log(
				`Error fetching answers for question ${questionId}: ${answersError.message}`
			);
			questions[i].answers = [];
		} else {
			questions[i].answers = answers;
		}

		const { data: hint, error: hintError } = await supabase
			.from('hints')
			.select()
			.eq('questionId', questionId)
			.single();

		if (hintError) {
			console.log(
				`Error fetching hints for question ${questionId}: ${answersError.message}`
			);
			questions[i].hint = null;
		} else {
			questions[i].hint = hint;
		}
	}

	return shuffleQuestions(questions);
}

getQuestions();

export async function getQuestion(id) {
	const { data: questions, error } = await supabase
		.from('questions')
		.select()
		.eq('id', id);

	if (error) console.log(`Error: ${error}`);

	return questions;
}
