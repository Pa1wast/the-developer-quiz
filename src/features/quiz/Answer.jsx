import styled from 'styled-components';
import { useQuiz } from '../../contexts/QuizProvider';

const StyledAnswer = styled.button`
	padding: 1rem;
	font-family: inherit;
	display: flex;
	align-items: center;
	gap: 2rem;
	border: none;
	text-decoration: none;
	background-color: var(--color-el-main);

	border-radius: var(--border-radius-md);
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-normal);
	color: var(--color-text-btn);
	cursor: pointer;
	word-wrap: break-word;
	word-break: break-all;
	white-space: normal;
	text-align: left;

	& > svg {
		font-size: var(--icon-size-sm);
		color: var(--color-text-main);
	}

	&:hover {
		outline: 1.5px solid var(--color-answer-hover);
	}

	${props =>
		props.selected && 'outline: 1.5px solid var(--color-answer-hover);'}

	${props => props.correct && 'background-color: var(--color-correct);'}
	
	${props => props.wrong === true && 'background-color: var(--color-wrong);'}
`;

const AnswerText = styled.span`
	font-weight: 400;
	font-size: 1.6rem;
	margin-right: 0.75rem;
	word-break: keep-all;
`;

const Icon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 3.5rem;
	min-height: 3.5rem;
	border-radius: 0.5rem;
	font-size: 2rem;
	background-color: var(--color-el-sec);
	color: var(--color-text-btn);
`;

function Answer({ answer, optionLetter }) {
	const { selectedAnswer, onSelectAnswer, isSubmitted } = useQuiz();

	const selected = answer.id === selectedAnswer?.id;
	const isCorrect = isSubmitted && answer.isCorrect;
	const isWrong = isSubmitted && selected && answer.isCorrect === false;

	return (
		<StyledAnswer
			wrong={isWrong}
			correct={isCorrect}
			selected={selected}
			onClick={() => onSelectAnswer(answer)}
			disabled={isSubmitted}
		>
			<Icon>{optionLetter}</Icon>
			<AnswerText>{answer.answerText}</AnswerText>
		</StyledAnswer>
	);
}

export default Answer;
