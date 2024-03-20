import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSettings } from '../contexts/SettingsContext';

const FullPage = styled.div`
	height: 100vh;
	display: grid;
	place-items: center;
	background-color: var(--color-bg-main);
`;

function ProtectedRoute({ children }) {
	const navigate = useNavigate();

	const { user, isLoading, isAuthenticated } = useUser();

	const { dispatch } = useSettings();

	useEffect(() => {
		if (!user) return;

		const email = user.email;

		const { firstName, lastName, username, profilePicture } =
			user.user_metadata;

		const loggedInUser = {
			email,
			firstName,
			lastName,
			username,
			profilePicture:
				'https://media.tenor.com/OXua4v7_uSkAAAAe/profile-picture.png',
		};

		dispatch({ type: 'auth/setUser', payload: loggedInUser });
	}, [user, dispatch]);

	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate('/login');
	}, [isAuthenticated, isLoading, navigate]);

	if (isLoading)
		return (
			<FullPage>
				<Loader />
			</FullPage>
		);

	if (isAuthenticated) return children;
}

export default ProtectedRoute;
