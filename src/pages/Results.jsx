import { useNavigate } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import Button from '../ui/Button';
import { useQuiz } from '../contexts/QuizProvider';
import { formatTime } from '../helpers/formatTime';
import { useSettings } from '../contexts/SettingsContext';
import { formatScore } from '../helpers/formatScore';

const ResultsLayout = styled.div`
	position: relative;
	display: grid;
	place-items: center;
	padding: 4rem 2rem;
	color: var(--color-text-btn);

	& > div {
		margin-bottom: 1.5rem;
	}

	& > button {
		width: 80%;
		margin-bottom: 0.5rem;
	}

	@media screen and (min-width: 785px) {
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 2rem;

		& > button {
			grid-column: 1/-1;
			width: 40%;
			padding: 1rem;
		}
	}
`;

const Score = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 20rem;
	aspect-ratio: 1;
	border-radius: 50%;
	font-size: 2rem;
	background-color: var(--color-el-sec);
	outline: 5px solid var(--color-el-main);
	outline-offset: 5px;

	@media screen and (min-width: 785px) {
		grid-column: 1/-1;
	}
`;

const QuizStats = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	font-size: 1.6rem;
	border-radius: 2rem;
	margin-top: 2.5rem;

	@media screen and (min-width: 785px) {
		grid-column: 1/-1;
		width: 40%;
	}
`;

const Stat = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	font-size: 1rem;
	background-color: var(--color-el-sec);
	padding: 1rem 2rem;
	border-radius: 1rem;
`;

const Span = styled.span`
	font-size: ${props => props.size};
	letter-spacing: 0.5px;
	color: var(--color-text-btn);
`;

const P = styled.p`
	font-size: ${props => props.size};
	letter-spacing: 0.5px;
`;

const confettiColors = [
	'#00A9FF',
	'#FF6868',
	'#45FFCA',
	'#FEFF86',
	'#EA8FEA',
	'#AEE2FF',
	'#FFEA20',
	'#FEDEFF',
	'#CDE990',
	'#FD8A8A',
];

function Results() {
	const { width, height } = useWindowSize();
	const navigate = useNavigate();
	const { onClearQuiz, timeSpent, isHints, hintsLeft, isTimer } = useQuiz();
	const { correctAnswers, numQuestions, quizProgress } = useQuiz();
	const score = (correctAnswers / numQuestions) * quizProgress;
	const { showHintsUsed, showTimeSpent, showCategoryScore, scoreType } =
		useSettings();

	return (
		<ResultsLayout>
			<Confetti
				width={width}
				height={height}
				initialVelocityY={{ min: -10, max: 20 }}
				numberOfPieces={1000}
				recycle={false}
				gravity={0.01}
				run={score >= 80}
				colors={confettiColors}
			/>

			<Score gap="1.6rem">
				<Span size="1.4rem">Your score is</Span>
				<Span size="4rem"> {formatScore(score, scoreType)}</Span>
			</Score>

			<QuizStats>
				{isTimer && showTimeSpent && (
					<Stat>
						<P size="1.6rem">Time spent: </P>
						<Span size="1.4rem">{formatTime(timeSpent, true)}</Span>
					</Stat>
				)}

				<Stat>
					<P size="1.6rem">Correct answers: </P>
					<Span size="1.4rem">
						{correctAnswers} out of {numQuestions}
					</Span>
				</Stat>

				{showCategoryScore && (
					<Stat>
						<P size="1.6rem">Category score: </P>
						<Span size="1.4rem">0%</Span>
					</Stat>
				)}

				{isHints && showHintsUsed && (
					<Stat>
						<P size="1.6rem">Hints used: </P>
						<Span size="1.4rem">{3 - hintsLeft}</Span>
					</Stat>
				)}
			</QuizStats>

			<Button
				onClick={() => {
					onClearQuiz();
					navigate('/leaderboard');
				}}
			>
				See leader board
			</Button>

			<Button
				onClick={() => {
					onClearQuiz();
					navigate('/');
				}}
			>
				Back to home
			</Button>
		</ResultsLayout>
	);
}

export default Results;

Span.defaultProps = {
	size: '1rem',
};
P.defaultProps = {
	size: '1.2rem',
};
