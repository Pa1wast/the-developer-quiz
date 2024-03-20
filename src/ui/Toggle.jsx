import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledToggle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const TogglePill = styled.div`
	position: relative;
	width: 1.6rem;
	height: 2rem;
	display: flex;
	align-items: center;
	border-radius: 100rem;
	padding: 0.5rem 0.25rem;
	transition: all 400ms ease-out;
	cursor: pointer;
	background-color: var(--color-el-light-main);
	opacity: 0.7;

	${props =>
		props.mode === 'on' &&
		'	background-color: var(--color-toggled); opacity:1;'}

	${props => props.display === 'visible' && 'width: 4rem; '}
`;

const Circle = styled.div`
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 100rem;
	transition: all 300ms;
	z-index: 999;
	background-color: var(--color-bg-sec);

	${props => props.mode === 'on' && 'transform: translateX(120%);'}
`;

function Toggle({ onToggle }) {
	const [display, setDisplay] = useState('hidden');
	useEffect(() => {
		setDisplay('visible');
	}, [display]);

	const [mode, setMode] = useState('off');

	function handleToggle() {
		onToggle();
		setMode(mode => (mode === 'off' ? 'on' : 'off'));
	}

	return (
		<StyledToggle>
			<TogglePill onClick={handleToggle} display={display} mode={mode}>
				<Circle mode={mode} />
			</TogglePill>
		</StyledToggle>
	);
}

export default Toggle;
