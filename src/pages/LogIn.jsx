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
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { CircleSpinner } from 'react-spinners-kit';
import useLogIn from '../features/authentication/useLogIn.js';
import { logIn } from '../api/apiAuth.js';

const LogInLayout = styled.div`
	margin: 0 auto;
	width: 100%;
	display: grid;
	gap: 2rem;
	padding: 3rem;
	transition: width 200ms;

	& > form > button {
		width: 8rem;
		height: 5rem;
		transition: width 500ms;

		${props => props.display === 'visible' && '	width: 100%;'}
	}

	& > form > * {
		position: relative;
	}

	& > form > :first-child {
		justify-self: end;
	}

	& > form > div > input {
		font-size: 1.4rem;
		font-weight: 400;

		&::placeholder {
			font-size: 1.2rem;
		}
	}

	@media screen and (min-width: 700px) {
		width: 40%;
	}
`;

const P = styled.p`
	font-size: 1.5rem;
	color: var(--color-text-main);
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

const ErrorMessage = styled.p`
	padding-inline: 0.5rem;
	border-radius: 0.5rem;
	font-size: 1rem;
	letter-spacing: 0.5px;
	font-weight: 400;
	color: var(--color-wrong);
`;

function LogIn() {
	const [display, setDisplay] = useState('hidden');
	useEffect(() => {
		setDisplay('visible');
	}, [display]);

	function handleShowPassword(e) {
		setShowPassword(show => !show);
	}

	const navigate = useNavigate();
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			email: 'me@example.com',
			password: '12345678',
		},
	});

	// const { logIn, isLoading } = useLogIn();

	const [showPassword, setShowPassword] = useState(false);

	async function onSubmit({ email, password }) {
		const {  error } = await logIn(email, password);
		if (error) toast.error(error.message);
		else navigate('/', { replace: true });
	}

	return (
		<LogInLayout display={display}>
			<Logo type="form" place="form" />

			<Form onSubmit={handleSubmit(onSubmit)}>
				<ToggleTheme />

				<Column gap="1.5rem">
					<Label>Email</Label>

					<Input
						display={display}
						type="text"
						placeholder="you@example.com"
						{...register('email', {
							required: 'Email is required',
							validate: value => {
								const pattern =
									/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

								if (!pattern.test(value))
									return 'Please type a valid email';

								return true;
							},
						})}
						disabled={isSubmitting}
					/>
					{errors?.email?.message && (
						<ErrorMessage>{errors.email.message}</ErrorMessage>
					)}
				</Column>

				<Column gap="1.5rem">
					<Row justify="space-between" align="center" w="100%">
						<Label>Password</Label>

						<ShowPassword onClick={e => handleShowPassword(e)}>
							{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
						</ShowPassword>
					</Row>

					<Input
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 8,
								message:
									'Password must have at least 8 characters',
							},
						})}
						type={showPassword ? 'text' : 'password'}
						display={display}
						placeholder="password"
						disabled={isSubmitting}
					/>

					{errors?.password?.message && (
						<ErrorMessage>{errors.password.message}</ErrorMessage>
					)}
				</Column>

				<Button type="form" disabled={isSubmitting}>
					{isSubmitting ? (
						<CircleSpinner color="var(--color-bg-main)" />
					) : (
						'Log in'
					)}
				</Button>
			</Form>

			<Row gap="1rem" align="center">
				<P>Don&apos;t have an account?</P>
				<Button onClick={() => navigate('/signup')}>Sign up</Button>
			</Row>
		</LogInLayout>
	);
}

export default LogIn;
