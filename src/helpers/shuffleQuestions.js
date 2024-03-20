import { shuffleAnswers } from './shuffleAnswers';

export function shuffleQuestions(questions) {
	let shuffledQuestions = [];

	const remainingQuestions = questions.slice();

	while (remainingQuestions.length > 0) {
		const randomIndex = Math.floor(
			Math.random() * remainingQuestions.length
		);

		const shuffledAnswers = shuffleAnswers(
			remainingQuestions[randomIndex].answers
		);

		shuffledQuestions.push({
			...remainingQuestions[randomIndex],
			answers: shuffledAnswers,
		});

		remainingQuestions.splice(randomIndex, 1);
	}

	return shuffledQuestions;
}
