import styled from 'styled-components';

const StyledButton = styled.button`
	/* width: fit-content; */
	font-family: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border: none;
	text-decoration: none;
	background-color: var(--color-el-main);
	border-radius: var(--border-radius-md);
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-normal);
	color: var(--color-text-btn);
	padding: 0.5rem 1rem;
	cursor: pointer;

	& > svg {
		font-size: var(--icon-size-sm);
		color: var(--color-text-btn);
	}

	&:hover {
		background-color: var(--color-btn-hover);
	}

	transition: width 400ms;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-btn-hover);
		opacity: 0.5;
	}
`;

function Button({ children, onClick, as = 'button', to, disabled }) {
	return (
		<StyledButton onClick={onClick} as={as} to={to} disabled={disabled}>
			{children}
		</StyledButton>
	);
}

export default Button;
