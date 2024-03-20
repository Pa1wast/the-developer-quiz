import supabase from '../api/supabase';

export async function getAnswers(questionId = 1) {
	const { data: answers, error } = await supabase
		.from('answers')
		.select()
		.eq('questionId', questionId);

	if (error) console.log(`Error: ${error}`);

	return answers;
}
