import styled from 'styled-components';
import { GoMoon } from 'react-icons/go';
import { GoSun } from 'react-icons/go';
import { useDarkMode } from '../contexts/DarkModeProvider';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

const StyledToggleTheme = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > svg {
		font-size: 1.8rem;
		color: var(--color-el-light-main);
	}
`;

const Toggle = styled.div`
	width: 1.6rem;
	height: 2rem;
	display: flex;
	align-items: center;
	border-radius: 100rem;
	padding: 0.5rem 0.25rem;
	transition: all 400ms ease-out;
	cursor: pointer;
	background-color: var(--color-el-light-main);

	${props => props.display === 'visible' && 'width: 4rem; '}
`;

const Circle = styled.div`
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 100rem;
	transition: all 300ms;
	background-color: var(--color-bg-main);

	${props => props.mode === 'dark' && 'transform: translateX(119%);'}
`;

function ToggleTheme() {
	const [display, setDisplay] = useState('hidden');

	useEffect(() => {
		setDisplay('visible');
	}, [display]);

	const { isDarkMode, onToggleTheme } = useDarkMode();

	return (
		<StyledToggleTheme>
			<GoSun />
			<Toggle onClick={onToggleTheme} display={display}>
				<Circle mode={isDarkMode ? 'dark' : 'light'} />
			</Toggle>
			<GoMoon />
		</StyledToggleTheme>
	);
}

export default ToggleTheme;
