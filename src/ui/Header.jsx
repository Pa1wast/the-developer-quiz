import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import User from '../features/authentication/User';
import { Row } from './Row';
import Button from './Button';
import { CgMenuLeft } from 'react-icons/cg';
import { useNavbar } from '../contexts/NavbarProvider';
import { TiArrowBack } from 'react-icons/ti';

const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 1.5rem;
	padding-block: 0.5rem;
	grid-column: 1/-1;
	background-color: var(--color-bg-main);
	border-bottom: 1px solid var(--color-el-main);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;

	${props => props.closed && 'pointer-events: none;'}

	@media screen and (min-width: 500px) {
		padding-inline: 3rem;
	}

	& > div > svg {
		font-size: 4rem;
		color: var(--color-el-main);
		transition: all 300ms;

		&:hover {
			transform: scale(1.1);
		}
	}
`;

function Header() {
	const { pathname } = useLocation();
	const { onClick: openNavbar } = useNavbar();

	return (
		<StyledHeader>
			{pathname === '/quizoptions' || pathname === '/leaderboard' ? (
				<Button as={Link} to="/">
					<TiArrowBack /> Go back
				</Button>
			) : (
				<Logo />
			)}

			<Row gap="1rem" align="center">
				{pathname.split('/')[1] !== 'settings' && <User />}

				{/* <Button as={Link} to="/login">
					Log in
				</Button> */}

				<CgMenuLeft onClick={openNavbar} />
			</Row>
		</StyledHeader>
	);
}

export default Header;
