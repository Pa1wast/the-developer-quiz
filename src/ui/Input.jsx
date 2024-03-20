import styled from 'styled-components';

export const Input = styled.input`
	width: 0;
	height: 3.5rem;
	border: none;
	border-radius: var(--border-radius-md);
	padding: 0.5rem 1rem;
	font-size: 1.6rem;
	transition: width 500ms;
	background-color: var(--color-input);
	color: var(--color-text-main);
	outline: 1.5px solid;
	outline-color: var(--color-text-btn);

	&:disabled {
		opacity: 0.4;
	}

	${props => props.display === 'visible' && '	width: 100%; '}

	${props =>
		props.type === 'file' &&
		`
		outline: none;
  cursor: pointer;
  color: #a719fe;
  `}
`;
