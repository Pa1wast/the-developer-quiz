import styled from 'styled-components';

import { ScaleLoader } from 'react-spinners';
import { useDarkMode } from '../contexts/DarkModeProvider';

const LoaderContainer = styled.div`
	padding: 1rem;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Loader() {
	const { isDarkMode } = useDarkMode();

	const color = isDarkMode ? '#7743DB' : '#265073';

	return (
		<LoaderContainer>
			<ScaleLoader color={color} />
		</LoaderContainer>
	);
}

export default Loader;
