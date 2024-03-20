import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Form } from '../ui/Form';
import { Input } from '../ui/Input';
import { Column } from '../ui/Column';
import { Row } from '../ui/Row';
import { Label } from '../ui/Label';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import ToggleTheme from '../ui/ToggleTheme';

import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { singUp } from '../api/apiAuth';
import toast from 'react-hot-toast';
import { useUser } from '../features/authentication/useUser';
import { useQueryClient } from '@tanstack/react-query';

const SignUpLayout = styled.div`
	margin: 0 auto;
	width: 90%;
	display: grid;
	gap: 1rem;
	padding: 0.5rem;
	transition: width 200ms;

	& > form > button {
		width: 8rem;
		height: 5rem;
		transition: width 500ms;

		${props => props.display === 'visible' && '	width: 100%;'}
	}

	& > form > :first-child {
		justify-self: end;
	}

	@media screen and (min-width: 700px) {
		width: 40%;
	}
`;

const P = styled.p`
	font-size: 1.5rem;
	color: var(--color-text-main);
`;

const InputsContainer = styled.div`
	height: 25rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;
	overflow-y: scroll;

	& > div > input {
		transition: all 500ms;
		font-size: 1.4rem;
		font-weight: 400;
		&::placeholder {
			font-size: 1.2rem;
		}
	}

	& > :last-child > input {
		margin-bottom: 2rem;
	}
`;

const ShowPassword = styled.div`
	width: 100%;
	height: 2rem;
	display: flex;
	justify-content: flex-end;
	opacity: 0.5;
	transition: all 200ms ease-in-out;

	& > svg {
		font-size: 1.4rem;
		align-self: end;
		opacity: 0.6;
		transition: opacity 300ms;
		margin-right: 0.5rem;
		transition: all 300ms;
		color: var(--color-text-btn);

		&:hover {
			opacity: 1;
		}
	}
`;

function LogIn() {
	const [display, setDisplay] = useState('hidden');

	useEffect(() => {
		setDisplay('visible');
	}, [display]);

	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	function handleShowPassword() {
		setShowPassword(show => !show);
	}

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const queryClient = useQueryClient();

	async function onSubmit({
		firstName,
		lastName,
		username,
		email,
		password,
	}) {
		const { data, error } = await singUp(
			email,
			password,
			firstName,
			lastName,
			username
		);

		console.log(data);

		if (error) {
			toast.error(error.message);
		} else {
			queryClient.setQueryData('[user]', data);
			reset();
			navigate('/', { replace: true });
		}
	}

	return (
		<SignUpLayout display={display}>
			<Logo type="form" />
			<Form onSubmit={handleSubmit(onSubmit)}>
				<ToggleTheme />

				<InputsContainer>
					<Column gap="1rem">
						<Label>First name</Label>

						<Input
							type="text"
							display={display}
							placeholder="Your first name"
							{...register('firstName')}
						/>
					</Column>

					<Column gap="1rem">
						<Label>Last name</Label>

						<Input
							type="text"
							display={display}
							placeholder="Your last name"
							{...register('lastName')}
						/>
					</Column>

					<Column gap="1rem">
						<Label>Username</Label>

						<Input
							type="text"
							display={display}
							placeholder="username"
							{...register('username')}
						/>
					</Column>

					<Column gap="1rem">
						<Label>Email</Label>

						<Input
							type="text"
							display={display}
							placeholder="you@example.com"
							{...register('email')}
						/>
					</Column>

					<Column gap="1rem">
						<Row justify="space-between" align="center" w="100%">
							<Label>Password</Label>

							<ShowPassword onClick={handleShowPassword}>
								{showPassword ? (
									<FaRegEyeSlash />
								) : (
									<FaRegEye />
								)}
							</ShowPassword>
						</Row>

						<Input
							type={showPassword ? 'text' : 'password'}
							display={display}
							placeholder="New password"
							{...register('password')}
						/>
					</Column>

					<Column gap="1rem">
						<Label>Confirm password</Label>

						<Input
							type={showPassword ? 'text' : 'password'}
							display={display}
							placeholder="Confirm  password"
							{...register('confirmPassword')}
						/>
					</Column>
				</InputsContainer>

				<Button type="form">Create account</Button>
			</Form>

			<Row gap="1rem" align="center">
				<P>Already have an account?</P>
				<Button onClick={() => navigate('/login')}>Log in</Button>
			</Row>
		</SignUpLayout>
	);
}

export default LogIn;
