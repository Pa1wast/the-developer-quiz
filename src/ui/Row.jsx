import styled from 'styled-components';

export const Row = styled.div`
	display: flex;
	align-items: center;
	width: ${props => props.w};
	flex-wrap: ${props => props.wrap};
	justify-content: ${props => props.justify};
	align-items: ${props => props.align};
	gap: ${props => props.gap};
`;

Row.defaultProps = {
	justify: 'flex-start',
	align: 'center',
	wrap: 'no-wrap',
	w: 'auto',
};
