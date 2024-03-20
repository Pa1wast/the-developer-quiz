import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useQuiz } from '../contexts/QuizProvider';
import { formatTime } from '../helpers/formatTime';

const StyledTimer = styled.div`
	display: flex;
	justify-content: center;
	min-width: 5.5rem;
	padding: 0.25rem;
	background-color: var(--color-el-main);
	border: 2px solid var(--color-el-light-main);
	border-radius: 0.5rem;
	opacity: 0.1;

	transition: transform 600ms ease-in, opacity 600ms ease-in;
	transform: translateX(200%);

	${props =>
		props.display === 'visible' && 'transform: translateX(0); opacity: 1; '}
`;

const Mins = styled.p`
	position: fixed;
	left: 5px;
`;
const Secs = styled.p`
	position: fixed;
	right: 5px;
`;

const Time = styled.div`
	font-size: 1.2rem;
	font-weight: 400;
	opacity: 0;
	transition: all 700ms;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	color: var(--color-text-btn);

	${props => props.display === 'visible' && ' opacity:1; '}
`;

function Timer({ display }) {
	const { onTimeout, timeLimit, onUpdateTimeSpent } = useQuiz();

	const [timer, setTimer] = useState(timeLimit);

	useEffect(() => {
		let timeRemaining = timer;

		const timerInterval = setInterval(() => {
			timeRemaining--;

			if (timeRemaining < 0) {
				clearInterval(timerInterval);
				onTimeout();
				return;
			}

			setTimer(timeRemaining);
			onUpdateTimeSpent(timeLimit - timeRemaining);
		}, 1000);

		return () => clearTimeout(timerInterval);
	}, []);

	return (
		<StyledTimer display={display}>
			<Time display={display}>
				<Mins>{formatTime(timer).mins}</Mins>:
				<Secs>{formatTime(timer).secs}</Secs>
			</Time>
		</StyledTimer>
	);
}

export default Timer;
