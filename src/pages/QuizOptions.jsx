import styled from 'styled-components';
import { Column } from '../ui/Column';
import { useNavigate } from 'react-router-dom';
import InputRadio from '../ui/InputRadio';
import { Label } from '../ui/Label';
import { Row } from '../ui/Row';
import { useEffect, useState } from 'react';
import { Heading } from '../ui/Heading';
import Checkbox from '../ui/Checkbox';
import { FaCheck } from 'react-icons/fa6';
import Button from '../ui/Button';
import useSound from 'use-sound';
import { useQuiz } from '../contexts/QuizProvider';

const StyledQuizOptions = styled.div`
	margin: 0 auto;
	display: grid;
	place-items: center;
	position: relative;
	height: 100vh;
	padding-bottom: 3rem;
	overflow-y: scroll;
	overflow-x: hidden;

	& > * {
		width: 100%;
		padding: 5rem;
		gap: 6rem;
		border-bottom: 1px solid var(--color-el-light-main);
	}

	& > :first-child {
		border: none;
		color: var(--color-text-main);
	}

	& > :last-child {
		border: none;
		gap: 1rem;

		& > button {
			font-size: 2rem;
			padding: 1rem 2rem;
			width: 65%;
		}
	}

	& > div label {
		font-size: 1.4rem;
		font-weight: 400;
		color: var(--color-text-sec);
	}

	@media screen and (min-width: 900px) {
		width: 50vw;
		padding-inline: 2rem;
	}
`;

const Span = styled.span`
	font-size: 1.4rem;
	font-weight: 400;
	color: var(--color-el-sec);
`;

function QuizOptions() {
	const [display, setDisplay] = useState('hidden');

	useEffect(() => {
		setDisplay('visible');
	}, [display]);

	const [selectedDifficulty, setSelectedDifficulty] = useState('');
	const [selectedNumQuestions, setSelectedNumQuestions] = useState('');
	const [isTimerEnabled, setIsTimerEnabled] = useState(false);
	const [isHintsEnabled, setIsHintsEnabled] = useState(false);

	const [play] = useSound(
		'../src/sounds/677861__el_boss__ui-button-click.wav',
		{
			volume: 0.1,
		}
	);

	const navigate = useNavigate();
	const {
		numQuestions,
		onSelectDifficulty,
		onSelectNumQuestions,
		onToggleHints,
		onToggleTimer,
	} = useQuiz();

	function handleSelectDifficulty(e) {
		const level = e.target.id;
		if (level === '' || !level) return;
		setSelectedDifficulty(level);
		play();
		onSelectDifficulty(level);
	}

	function handleSelectNumQuestions(e) {
		const num = e.target.id;
		if (num === '' || !num) return;
		setSelectedNumQuestions(num);
		play();
		onSelectNumQuestions(num);
	}

	function handleToggleHints() {
		setIsHintsEnabled(isHintsEnabled => !isHintsEnabled);
		onToggleHints();
	}
	function handleToggleTimer() {
		setIsTimerEnabled(isTimerEnabled => !isTimerEnabled);
		onToggleTimer();
	}

	function handleStartQuiz() {
		if (!numQuestions || !selectedDifficulty) return;
		navigate('/quiz');
	}

	return (
		<StyledQuizOptions>
			<Heading as="h2" display={display}>
				Quiz Options
			</Heading>
			<Column align="center" justify="space-between">
				<Heading as="h4" display={display}>
					Select difficulty level
				</Heading>
				<Row
					wrap="wrap"
					gap="5rem"
					justify="center"
					onClick={e => handleSelectDifficulty(e)}
				>
					<Column gap="2rem" align="center">
						<InputRadio
							id="easy"
							selectedDifficulty={selectedDifficulty}
						/>
						<Label>Easy</Label>
					</Column>

					<Column gap="2rem" align="center">
						<InputRadio
							id="normal"
							selectedDifficulty={selectedDifficulty}
						/>
						<Label>Normal</Label>
					</Column>

					<Column gap="2rem" align="center">
						<InputRadio
							id="hard"
							selectedDifficulty={selectedDifficulty}
						/>
						<Label>Hard</Label>
					</Column>

					<Column gap="2rem" align="center">
						<InputRadio
							id="guru"
							selectedDifficulty={selectedDifficulty}
						/>
						<Label>Guru</Label>
					</Column>

					<Column gap="2rem" align="center">
						<InputRadio
							id="master"
							selectedDifficulty={selectedDifficulty}
						/>
						<Label>Master</Label>
					</Column>
				</Row>
			</Column>

			<Column gap="5rem" align="center" justify="space-between">
				<Heading as="h4" display={display}>
					Select number of questions
				</Heading>
				<Row
					wrap="wrap"
					justify="center"
					gap="5rem"
					onClick={e => handleSelectNumQuestions(e)}
				>
					<Column gap="2rem" align="center">
						<InputRadio
							id="5"
							selectedNumQuestions={selectedNumQuestions}
						/>
						<Label>5</Label>
					</Column>

					<Column gap="2rem" align="center">
						<InputRadio
							id="10"
							selectedNumQuestions={selectedNumQuestions}
						/>
						<Label>10</Label>
					</Column>

					<Column gap="2rem" align="center">
						<InputRadio
							id="15"
							selectedNumQuestions={selectedNumQuestions}
						/>
						<Label>15</Label>
					</Column>

					<Column gap="2rem" align="center">
						<InputRadio
							id="20"
							selectedNumQuestions={selectedNumQuestions}
						/>
						<Label>20</Label>
					</Column>
				</Row>
			</Column>

			<Column gap="5rem" justify="space-around" align="center">
				<Heading as="h4" display={display}>
					Other options
				</Heading>

				<Row gap="5rem">
					<Row gap="1rem" justify="center" align="center">
						<Checkbox
							onClick={handleToggleTimer}
							isChecked={isTimerEnabled}
						>
							{isTimerEnabled && <FaCheck />}
						</Checkbox>

						<Span>Timer</Span>
					</Row>

					<Row gap="1rem" justify="center" align="center">
						<Checkbox
							onClick={handleToggleHints}
							isChecked={isHintsEnabled}
						>
							{isHintsEnabled && <FaCheck />}
						</Checkbox>

						<Span>Hints</Span>
					</Row>
				</Row>
			</Column>

			<Column gap="1rem" align="center">
				<Button onClick={handleStartQuiz}>Start quiz</Button>
			</Column>
		</StyledQuizOptions>
	);
}

export default QuizOptions;
