import styled from 'styled-components';

export const Heading = styled.h1`
	text-align: center;
	transform: translateY(-110%);
	opacity: 0.2;
	transition: all 700ms;
	color: var(--color-text-sec);

	${props =>
		props.display === 'visible' && 'transform: translateX(0); opacity: 1; '}

	${props =>
		props.as === 'h1' &&
		`
font-size: 3.5rem;
font-weight: 700;
`}

	${props =>
		props.as === 'h2' &&
		`
font-size: 2.5rem;
font-weight: 600;
color
`}
	${props =>
		props.as === 'h3' &&
		`
font-size: 2rem;
font-weight: 500;
color
`}

	${props =>
		props.as === 'h4' &&
		`
font-size: 1.6rem;
font-weight: 400;
color
`}
`;

Heading.defaultProps = {
	as: 'h1',
};
