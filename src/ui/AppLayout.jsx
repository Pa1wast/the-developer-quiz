import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import NavBar from './Navbar';
import { useNavbar } from '../contexts/NavbarProvider';
import Uploader from './Uploader';

const StyledAppLayout = styled.div`
	display: grid;
	height: 100vh;
	overflow: hidden;
`;

const Main = styled.main`
	height: 100%;
	background-color: var(--color-bg-main);
	padding-top: 5rem;
	${props => props.closed && 'pointer-events: none;'}
`;

function AppLayout() {
	const { isNavbarOpen } = useNavbar();

	return (
		<>
			<StyledAppLayout>
				<Header closed={isNavbarOpen} />
				<NavBar />

				<Main closed={isNavbarOpen}>
					<Outlet />
				</Main>
			</StyledAppLayout>

			{/* <Uploader /> */}
		</>
	);
}

export default AppLayout;
