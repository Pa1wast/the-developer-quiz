import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Row } from '../ui/Row';
import Button from '../ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import { useQuestions } from '../features/quiz/useQuestions';
import Answer from '../features/quiz/Answer';
import { useQuiz } from '../contexts/QuizProvider';
import Timer from '../ui/Timer';
import Loader from '../ui/Loader';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import TimeoutModal from '../ui/TimeoutModal';
import { useSettings } from '../contexts/SettingsContext';

const QuizLayout = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: 100vh;
	padding: 8rem;
	position: relative;
	color: var(--color-text-main);
	background-color: var(--color-bg-sec);
	overflow-y: scroll;
	overflow-x: hidden;

	& > div > span {
		font-size: 2rem;
	}

	@media screen and (min-width: 870px) {
		padding: 5rem 7rem;
	}

	@media screen and (max-width: 500px) {
		padding: 4rem 2rem;
	}
`;

const Hints = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.35rem;
	border-radius: 0.5rem;
	cursor: pointer;
	z-index: 1;
	opacity: 0.1;

	background-color: var(--color-el-main);
	border: 2px solid var(--color-el-light-main);

	& > svg {
		color: var(--color-text-btn);
	}

	&:hover {
		border-color: var(--color-el-light-main);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.3;
	}

	transition: transform 500ms ease-out, opacity 500ms ease-out;
	transform: translateX(220%);

	${props =>
		props.display === 'visible' && 'transform: translateX(0); opacity: 1; '}

	&:disabled {
		background-color: var(--color-el-sec);
		opacity: 0.3;
		pointer-events: none;
	}
`;

const HintsModal = styled.div`
	position: absolute;
	top: 6.5rem;
	right: 0;
	transform: translate(-50%, -50%);
	max-width: 85%;
	background-color: var(--color-bg-main);
	color: var(--color-text-main);
	padding: 2rem;
	border-radius: 0.5rem;
	z-index: 999;
	display: flex;
	justify-content: center;

	& > svg {
		font-size: 1.5rem;
		position: fixed;
		right: 4px;
		top: 4px;

		opacity: 0.5;
		transition: opacity 300ms;
		cursor: pointer;

		&:hover {
			opacity: 1;
		}
	}
`;

const HintText = styled.p`
	font-size: 1.2rem;
	text-align: left;
`;

const Span = styled.span`
	font-size: 1.4rem;
	font-weight: 500;
	opacity: 0;
	transition: all 700ms;
	color: var(--color-text-btn);

	${props => props.display === 'visible' && ' opacity:1; '}
`;

const Container = styled.div`
	display: grid;
	place-items: center;
	row-gap: 3rem;

	& > * {
		width: 100%;
	}

	& > :last-child {
		grid-column: 2/-1;
		padding-block: 2rem;

		transition: transform 400ms;
		transform: translateX(200%);
		transition: transform 700ms, background-color 300ms;

		${props =>
			props.display === 'visible' &&
			'transform: translateX(0); opacity: 1; '}
	}

	@media screen and (min-width: 870px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		column-gap: 10rem;
		row-gap: 1rem;

		& > :last-child {
			grid-column: 2/-1;
			padding-block: 2rem;
		}
	}
`;

const Question = styled.h3`
	width: 100%;
	font-size: 2.2rem;
	font-weight: 500;
	word-wrap: break-word;
	margin-top: 1rem;
	align-self: flex-start;
	justify-self: start;
	opacity: 0;
	transition: all 700ms;
	color: var(--color-text-btn);

	${props => props.display === 'visible' && ' opacity:1; '}

	@media screen and (min-width: 870px) {
		grid-column: 1/2;
		grid-row: 1/3;
	}
`;

const ChoiceList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	& > button {
		opacity: 0.1;
	}

	& > :nth-child(1) {
		transition: transform 600ms, background-color 300ms;
		transform: translateX(175%);

		${props =>
			props.display === 'visible' &&
			'transform: translateX(0); opacity: 1; '}
	}
	& > :nth-child(2) {
		transition: transform 500ms, background-color 300ms;
		transform: translateX(150%);

		${props =>
			props.display === 'visible' &&
			'transform: translateX(0); opacity: 1; '}
	}
	& > :nth-child(3) {
		transition: transform 400ms, background-color 300ms;
		transform: translateX(125%);

		${props =>
			props.display === 'visible' &&
			'transform: translateX(0); opacity: 1; '}
	}
	& > :nth-child(4) {
		transition: transform 300ms, background-color 300ms;
		transform: translateX(100%);

		${props =>
			props.display === 'visible' &&
			'transform: translateX(0); opacity: 1; '}
	}

	& > :nth-child(5) {
		transition: transform 300ms, background-color 300ms;
		transform: translateX(100%);

		${props =>
			props.display === 'visible' &&
			'transform: translateX(0); opacity: 1; '}
	}

	@media screen and (min-width: 870px) {
		grid-template-columns: 1fr 1fr;
		grid-column: 2/-1;
		grid-row: 1/-1;

		& > * {
			padding-block: 1.5rem;
		}
	}
`;

const ProgressContainer = styled.div`
	width: 1rem;
	display: flex;
	align-items: center;

	border-radius: 1rem;
	align-self: end;
	opacity: 0.2;
	transition: all 700ms;
	background-color: var(--color-el-main);

	${props => props.display === 'visible' && 'width: 100%; opacity:1; '}

	@media screen and (min-width: 870px) {
		grid-column: 1/2;
		grid-row: 2/-1;
	}
`;

const ProgressBar = styled.div`
	width: ${props => props.progress}%;
	height: 1rem;
	border-radius: 1rem;
	transition: width 300ms;

	background-color: var(--color-el-light-main);
`;

function Quiz() {
	const [display, setDisplay] = useState('hidden');
	useEffect(() => {
		setDisplay('visible');
	}, []);

	const [playWin] = useSound('../src/sounds/668436__david819__win.mp3', {
		volume: 0.75,
	});
	const [playCorrectAnswer] = useSound(
		'../src/sounds/676401__cjspellsfish__score-1.mp3',
		{
			volume: 0.1,
		}
	);
	const [playWrongAnswer] = useSound(
		'../src/sounds/351565__bertrof__game-sound-incorrect-organic-violin.wav',
		{
			volume: 0.1,
		}
	);

	const {
		selectedAnswer,
		quizProgress,
		onSubmitAnswer,
		currentQuestionIndex,
		numQuestions,
		isSubmitted,
		onNextQuestion,
		isHints,
		isTimer,

		quizEnded,
		onEndQuiz,
		onClearQuiz,
		correctAnswers,
		onUseHint,
		hintsLeft,
		isAnswerSelected,
		isTimeout,
	} = useQuiz();

	useEffect(() => {
		if (quizProgress === 100) onEndQuiz();
	}, [quizProgress, onEndQuiz]);
	const navigate = useNavigate();

	const optionLetters = ['A', 'B', 'C', 'D', 'E'];
	const [showHint, setShowHint] = useState(false);
	const [hintUsed, setHintUsed] = useState(false);

	const ref = useRef();

	useEffect(() => {
		const checkForClickOutside = e => {
			if (ref.current !== e.target.current) setShowHint(false);
		};

		document.addEventListener('click', checkForClickOutside, true);
	}, [showHint]);

	const { isLoading, questions } = useQuestions();

	if (isLoading) return <Loader />;

	const currentQuestion = questions.at(currentQuestionIndex);
	const answers = currentQuestion.answers;
	const { hintText } = currentQuestion.hint;

	function handleSubmit() {
		if (!selectedAnswer.id) return;

		if (selectedAnswer.isCorrect) playCorrectAnswer();
		else playWrongAnswer();
		onSubmitAnswer(selectedAnswer);
	}

	function handleNextQuestion() {
		onNextQuestion();
		setHintUsed(false);
	}

	function handleSeeResults() {
		const score = (correctAnswers / numQuestions) * quizProgress;

		navigate('/results');
		if (score >= 80) playWin();
	}

	function handleUseHint() {
		onUseHint();
		setHintUsed(true);
		setShowHint(true);
	}

	return (
		<QuizLayout>
			{isTimeout && <TimeoutModal />}
			<Row
				gap="1.5rem"
				align="center"
				justify="space-between"
				wrap="wrap"
			>
				<Button
					onClick={() => {
						onClearQuiz();
						navigate('/');
					}}
				>
					Quit
				</Button>

				<Span display={display}>
					Question {currentQuestionIndex + 1} of {numQuestions}
				</Span>

				<Row gap="0.5rem">
					{isHints && (
						<>
							<Hints
								onClick={handleUseHint}
								display={display}
								disabled={hintsLeft <= 0 || hintUsed}
							>
								<FaRegLightbulb />
							</Hints>
						</>
					)}

					{showHint && (
						<HintsModal ref={ref}>
							<HintText>{hintText}</HintText>
							<IoCloseOutline
								onClick={() => setShowHint(false)}
							/>
						</HintsModal>
					)}

					{isTimer && <Timer display={display} />}
				</Row>
			</Row>

			<Container display={display}>
				<Question display={display}>
					{currentQuestion.questionText}
				</Question>

				<ProgressContainer display={display}>
					<ProgressBar progress={quizProgress} />
				</ProgressContainer>

				<ChoiceList display={display}>
					{answers?.map((answer, index) => (
						<Answer
							answer={answer}
							key={answer.id}
							optionLetter={optionLetters.at(index)}
						/>
					))}
				</ChoiceList>

				{!isSubmitted ? (
					<Button onClick={handleSubmit} disabled={!isAnswerSelected}>
						Submit
					</Button>
				) : !quizEnded ? (
					<Button onClick={handleNextQuestion}>Next question</Button>
				) : (
					<Button onClick={handleSeeResults}>See results</Button>
				)}
			</Container>
		</QuizLayout>
	);
}

export default Quiz;
