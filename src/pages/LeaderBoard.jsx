import { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../ui/Toggle';
import ToggleTheme from '../ui/ToggleTheme';
import { Row } from '../ui/Row';

const LeaderBoardLayout = styled.div`
	position: relative;
	padding: 2vw 2vw 7rem 2vw;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	gap: 1px;

	@media screen and (max-width: 600px) {
		height: 90vh;
	}

	& > * {
		background-color: var(--color-bg-sec);
		padding: 1rem;
		border-radius: 3px;
	}
`;

const P = styled.p`
	flex: 1;

	font-weight: 500;
	justify-self: start;
	color: var(--color-text-btn);
`;

const Stat = styled.div`
	flex: 1;
	gap: 2rem;

	padding: 1rem 2rem;
	border-radius: 1rem;

	color: var(--color-text-btn);
`;

function LeaderBoard() {
	const [scoreType, setScoreType] = useState('percentage');

	const scoreTypes = [
		{ type: 'percentage', example: '75%' },
		{ type: 'decimal', example: '0.75' },
		{ type: 'letter-grades', example: 'B+' },
	];

	return (
		<LeaderBoardLayout>
			<Row gap="2rem">
				<P>Rank</P>
				<P>Username</P>
				<P>Score</P>
			</Row>

			<Row gap="2rem">
				<Stat> 1</Stat>
				<Stat> You</Stat>
				<Stat>76%</Stat>
			</Row>
		</LeaderBoardLayout>
	);
}

export default LeaderBoard;
