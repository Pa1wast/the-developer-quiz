import { useEffect } from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';

const StyledCheckbox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3.4rem;
	aspect-ratio: 1;
	border: 1.5px solid var(--color-el-main);
	border-radius: 0.5rem;
	outline: none;
	cursor: pointer;
	transition: all 200ms;

	&:hover {
		background-color: var(--color-el-light-main);
		outline-color: var(--color-el-light-main);
	}

	${props =>
		props.checked === 'true' &&
		`
	outline: 2px solid var(--color-el-main);
	outline-offset: 0.25rem;
	background-color:  var(--color-el-main);
	`}

	& > svg {
		font-size: 1.4rem;
		color: var(--color-text-btn);
	}
`;

function Checkbox({ isChecked, onClick, children }) {
	const [play] = useSound(
		'../src/sounds/677861__el_boss__ui-button-click.wav',
		{
			volume: 0.1,
		}
	);
	const [stop] = useSound(
		'../src/sounds/721257__anjashosting__ui_button_click.mp3',
		{
			volume: 0.1,
		}
	);

	useEffect(() => {
		if (isChecked) play();
		else stop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isChecked]);

	return (
		<StyledCheckbox
			checked={isChecked ? 'true' : 'false'}
			onClick={onClick}
		>
			{children}
		</StyledCheckbox>
	);
}

export default Checkbox;
