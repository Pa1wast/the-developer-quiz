import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../contexts/DarkModeProvider';

const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`;

const Icon = styled.img`
	width: 5rem;
	padding: 0.5rem;
	aspect-ratio: 1;
	transform: translateX(-110%);
	opacity: 0.1;
	transition: all 400ms ease-in-out;
	z-index: 1000;

	@media screen and (max-width: 600px) {
		width: 4rem;
	}

	/* &:hover + p {
		transform: translateX(0);
		opacity: 1;
	} */

	${props =>
		props.display === 'visible' && 'transform: translateX(0); opacity: 1; '}
`;

const P = styled.p`
	font-size: 2rem;
	color: var(--color-el-sec);
	transform: translateX(-40%);
	opacity: 0;
	z-index: -1;
	transition: all 500ms ease-out;

	${props =>
		props.display === 'visible' && 'transform: translateX(0); opacity: 1; '}

	@media screen  and (max-width:600px) {
		display: none;
	}
`;

function Logo() {
	const [display, setDisplay] = useState('hidden');

	useEffect(() => {
		setDisplay('visible');
	}, [display]);

	const { isDarkMode } = useDarkMode();

	return (
		<StyledLogo>
			<Icon
				src={`../src/images/logo/logo-${
					isDarkMode ? 'dark' : 'light'
				}.png`}
				alt="Quiz Logo"
				display={display}
			/>
			<P display={display}> The Developer Quiz</P>
		</StyledLogo>
	);
}

export default Logo;
