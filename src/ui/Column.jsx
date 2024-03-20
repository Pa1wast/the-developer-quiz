import styled from 'styled-components';

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.justify};
	align-items: ${props => props.align};
	gap: ${props => props.gap};
`;

Column.defaultProps = {
	justify: 'flex-start',
	align: 'flex-start',
};
