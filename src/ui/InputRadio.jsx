import styled from 'styled-components';

const StyledInputRadio = styled.div`
	width: 3.4rem;
	aspect-ratio: 1;
	border-radius: 50%;
	border: 1.5px solid var(--color-el-main);
	outline: none;
	cursor: pointer;
	transition: all 300ms;

	&:hover {
		background-color: var(--color-el-light-main);
		outline-color: var(--color-el-light-main);
	}

	${props =>
		props.selected &&
		`
        background-color: var(--color-el-main);
        outline: 2px solid var(--color-el-main);
        outline-offset: 0.25rem;
    `}
`;

function InputRadio({ id, selectedDifficulty, selectedNumQuestions }) {
	const selected = id === selectedDifficulty || id === selectedNumQuestions;

	return <StyledInputRadio id={id} selected={selected} />;
}

export default InputRadio;
