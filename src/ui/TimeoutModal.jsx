import styled from 'styled-components';
import { Row } from './Row';
import Button from './Button';
import { useQuiz } from '../contexts/QuizProvider';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Modal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 3rem;
	width: min(40rem, 90%);
	height: max(20rem, fit-content);
	padding: 2rem;
	font-size: 1.4rem;
	border-radius: 1rem;
	background-color: var(--color-bg-main);

	& > :nth-child(2) {
		& > button {
			padding: 1rem 2rem;
		}
	}
`;

const Text = styled.p`
	font-size: 2rem;
	line-height: 1.3;
	font-weight: 500;
	color: var(--color-text-main);
`;

function TimeoutModal() {
	const { onClearQuiz, onTryAgain } = useQuiz();
	const navigate = useNavigate();

	return (
		<Modal>
			<Text>
				You ran out of time. Do you want to give the quiz another try?
			</Text>

			<Row gap="2rem" wrap="wrap">
				<Button
					onClick={() => {
						onClearQuiz();
						navigate('/');
					}}
				>
					Cancel
				</Button>
				<Button onClick={() => navigate('/quizOptions')}>
					Try again
				</Button>
			</Row>
		</Modal>
	);
}

export default TimeoutModal;
