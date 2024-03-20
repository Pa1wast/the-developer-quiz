import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const SettingsLayout = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 4fr;

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
	}
`;

const Sidebar = styled.div`
	padding-top: 3rem;
	padding-inline: 1rem;
	height: 100%;
	display: flex;
	flex-direction: column;

	gap: 2rem;
	transition: transform 300ms ease-out;
	background-color: var(--color-bg-sec);

	@media screen and (max-width: 600px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding-block: 1.5rem;
	}
`;

const SidebarItem = styled(NavLink)`
	position: relative;
	text-decoration: none;
	font-size: 2rem;
	padding: 2rem 4rem;

	color: var(--color-text-btn);

	&.active {
		color: var(--color-el-light-main);
		border: 2px solid var(--color-el-light-main);
		border-radius: 1rem;
	}

	@media screen and (max-width: 600px) {
		font-size: 1.8rem;
		padding: 0.5rem 1.5rem;
	}
`;

const Title = styled.h3`
	text-align: center;
	font-size: 2.5rem;
	padding: 2rem;
	font-weight: 500;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	color: var(--color-text-btn);

	@media screen and (max-width: 600px) {
		display: none;
	}
`;

function Settings() {
	const [display, setDisplay] = useState('hidden');

	useEffect(() => {
		setDisplay('visible');
	}, [display]);

	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname === '/settings') navigate('display');
	}, [navigate, pathname]);

	return (
		<SettingsLayout>
			<Sidebar>
				<Title>Settings</Title>

				<SidebarItem to="display">Display</SidebarItem>

				<SidebarItem to="sound">Sound</SidebarItem>

				<SidebarItem to="account">Account</SidebarItem>
			</Sidebar>

			<Outlet />
		</SettingsLayout>
	);
}

export default Settings;
