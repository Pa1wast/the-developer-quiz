import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { useNavbar } from '../contexts/NavbarProvider';
import { NavLink } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useLogOut } from '../features/authentication/useLogOut';
import Loader from './Loader';

const StyledNavBar = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;

	z-index: 1000;
	padding-block: 6rem;
	background: transparent;
	background-color: var(--color-bg-nav);
	backdrop-filter: blur(10px);
	list-style: none;
	transform: translateX(100%);
	transition: transform 300ms ease-in-out;

	${props => props.open && 'transform: translateX(0);'}

	& > svg {
		position: absolute;
		font-size: 4rem;
		top: 1rem;
		right: 2rem;
		color: #fff;
		transition: all 200ms;
		border-radius: 1rem;
		cursor: pointer;

		&:hover {
			background-color: var(--color-el-light-main);
		}
	}

	& > :nth-child(1) {
		transition: transform 800ms, background-color 300ms;
		transform: translateX(175%);

		${props => props.open && 'transform: translateX(0); opacity: 1; '}
	}
	& > :nth-child(2) {
		transition: transform 700ms, background-color 300ms;
		transform: translateX(150%);
		border-top: 1px solid var(--color-el-light-sec);

		${props => props.open && 'transform: translateX(0); opacity: 1; '}
	}
	& > :nth-child(3) {
		transition: transform 600ms, background-color 300ms;
		transform: translateX(125%);

		${props => props.open && 'transform: translateX(0); opacity: 1; '}
	}
	& > :nth-child(4) {
		transition: transform 500ms, background-color 300ms;
		transform: translateX(100%);

		${props => props.open && 'transform: translateX(0); opacity: 1; '}
	}

	& > :nth-child(5) {
		transition: transform 400ms, background-color 300ms;
		transform: translateX(100%);

		${props => props.open && 'transform: translateX(0); opacity: 1; '}
	}
	& > :nth-child(6) {
		transition: transform 300ms, background-color 300ms;
		transform: translateX(100%);

		${props => props.open && 'transform: translateX(0); opacity: 1; '}
	}

	@media screen and (min-width: 700px) {
		width: 30%;
	}
`;

const NavItem = styled.button`
	display: flex;
	align-items: center;
	padding: 2.5rem 2rem;
	color: var(--color-text-btn);
	font-size: 1.8rem;
	font-weight: 400;
	background: none;
	border: none;
	border-bottom: 1px solid var(--color-el-light-sec);
	transition: all 200ms;
	text-decoration: none;

	&:hover {
		background: var(--color-el-sec);
	}
`;

function NavBar() {
	const { isNavbarOpen, onClick: closeNavbar } = useNavbar();

	const { logOut, isLoading } = useLogOut();

	function handleLogOut() {
		logOut();
		closeNavbar();
	}

	return (
		<StyledNavBar open={isNavbarOpen}>
			<IoCloseOutline onClick={closeNavbar} />
			<NavItem as={NavLink} to="/" onClick={closeNavbar}>
				Home
			</NavItem>

			<NavItem as={NavLink} to="/leaderboard" onClick={closeNavbar}>
				Leader Board
			</NavItem>
			<NavItem as={NavLink} to="/settings" onClick={closeNavbar}>
				Settings
			</NavItem>
			<NavItem as={NavLink} to="/about" onClick={closeNavbar}>
				About
			</NavItem>

			<NavItem onClick={handleLogOut}>
				{isLoading ? <Loader /> : 'Log out'}
			</NavItem>
		</StyledNavBar>
	);
}

export default NavBar;
