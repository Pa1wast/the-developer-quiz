import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Row } from '../../ui/Row';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Input } from '../../ui/Input';
import { FaEdit } from 'react-icons/fa';
import { Column } from '../../ui/Column';
import { FaSave } from 'react-icons/fa';
import Button from '../../ui/Button';
import { useSettings } from '../../contexts/SettingsContext';
import { useDarkMode } from '../../contexts/DarkModeProvider';
import { updateUser } from '../../api/apiAuth';
import toast from 'react-hot-toast';

const AccountSettingsLayout = styled.div`
	padding: 2vw 2vw 7rem 2vw;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	gap: 1px;

	@media screen and (max-width: 600px) {
		height: 90vh;
	}

	& > :first-child > div > :first-child {
		font-size: 2rem;
		flex: 1;
	}

	& > * {
		width: 100%;
		background-color: var(--color-bg-sec);
		padding: 2rem;
		border-radius: 3px;

		& > :first-child {
			& > svg {
				font-size: 1.4rem;
				color: var(--color-el-light-main);
				opacity: 0.4;
				transition: opacity 300ms;

				cursor: pointer;

				&:hover {
					opacity: 1;
				}
			}
		}

		& > :last-child {
			width: max(50%, 20rem);
			height: 2.5rem;
			font-size: 1.2rem;
		}

		@media screen and (max-width: 600px) {
			padding: 3rem;
		}
	}

	& > :last-child {
		& > button {
			padding: 1.5rem;
			width: fit-content;
			transition: background-color 300ms;
			background-color: var(--color-el-light-main);
			color: var(--color-text-main);

			&:hover {
				background-color: var(--color-el-light-sec);
			}
		}

		& > div {
			width: 100%;

			& > input {
				width: max(50%, 20rem);
				height: 2.5rem;
				font-size: 1.2rem;
			}
		}

		& > div > div > svg {
			font-size: 1.4rem;
			color: var(--color-el-light-main);
			opacity: 0.4;
			transition: opacity 300ms;

			cursor: pointer;

			&:hover {
				opacity: 1;
			}
		}
	}
`;

const P = styled.p`
	font-size: 1.2rem;
	font-weight: 500;
	justify-self: start;
	color: var(--color-text-btn);
`;

const ProfilePictureContainer = styled.div`
	display: flex;
	border-radius: 50%;
	overflow: hidden;
	outline: 3px solid var(--color-el-light-main);
	width: 10rem;
	aspect-ratio: 1;
`;
const ProfilePicture = styled.img`
	width: 100%;
`;

const InputFile = styled.input`
	color: var(--color-text-btn);
	max-width: fit-content;
`;

function AccountSettings() {
	const { profilePicture: profile } = useSettings();

	const [fullName, setFullName] = useState('');
	const [username, setUsername] = useState('');

	const [profilePicture, setProfilePicture] = useState('');

	const [isEditingFullName, setEditingFullName] = useState(false);
	const [isEditingUsername, setEditingUsername] = useState(false);

	const [email, setEmail] = useState('');
	const [isEditingEmail, setEditingEmail] = useState(false);

	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const nameInputRef = useRef();
	const usernameInputRef = useRef();

	function handleShowPassword() {
		setShowPassword(show => !show);
	}

	useEffect(() => {
		if (isEditingFullName) nameInputRef.current.focus();

		if (isEditingUsername) nameInputRef.current.focus();
	}, [isEditingFullName, isEditingUsername]);

	async function handleUpdateUser() {
		const firstName = fullName.split(' ')[0];
		const lastName = fullName.split(' ')[1];

		await updateUser({
			firstName,
			lastName,
			username,
			password,
			email,
			profilePicture,
		});

		if (password !== confirmPassword) {
			toast.error('Passwords have to match');
			return;
		}
		if (password.length < 8) {
			toast.error('Password has to be at least 8(char)');
			return;
		}
	}

	return (
		<AccountSettingsLayout>
			<Row justify="space-between" gap="2rem" align="center" wrap="wrap">
				<Column gap="0.5rem">
					<P>Paiwast Abubakir Wahid</P>
					<P>@pa1wast</P>
				</Column>

				<ProfilePictureContainer>
					<ProfilePicture src={profile} />
				</ProfilePictureContainer>

				<InputFile
					type="file"
					value={profilePicture}
					onChange={e => setProfilePicture(e.target.value)}
				/>
				<Button onClick={handleUpdateUser}>
					Change profile picture
				</Button>
			</Row>

			<Row justify="space-between" wrap="wrap" gap="1rem">
				<Row gap="1rem" align="center">
					<P>Full name</P>
					{isEditingFullName ? (
						<>
							<FaSave
								onClick={() => {
									handleUpdateUser();
									setEditingFullName(false);
								}}
							/>
						</>
					) : (
						<FaEdit
							onClick={() => {
								setEditingFullName(true);
							}}
						/>
					)}
				</Row>

				<Input
					disabled={!isEditingFullName}
					ref={nameInputRef}
					value={fullName}
					onChange={e => setFullName(e.target.value)}
				/>
			</Row>

			<Row justify="space-between" wrap="wrap" gap="1rem">
				<Row gap="1rem" align="center">
					<P>Username</P>
					{isEditingUsername ? (
						<>
							<FaSave
								onClick={() => {
									handleUpdateUser();
									setEditingUsername(false);
								}}
							/>
						</>
					) : (
						<FaEdit
							onClick={() => {
								setEditingUsername(true);
							}}
						/>
					)}
				</Row>
				<Input
					disabled={!isEditingUsername}
					ref={usernameInputRef}
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
			</Row>

			<Row justify="space-between" wrap="wrap" gap="1rem">
				<Row gap="1rem" align="center">
					<P>Email</P>
					{isEditingEmail ? (
						<>
							<FaSave
								onClick={() => {
									handleUpdateUser();
									setEditingEmail(false);
								}}
							/>
						</>
					) : (
						<FaEdit
							onClick={() => {
								setEditingEmail(true);
							}}
						/>
					)}
				</Row>

				<Input
					disabled={!isEditingEmail}
					value={email}
					onChange={e => {
						setEmail(e.target.value);
					}}
				/>
			</Row>

			<Column gap="2rem">
				<Row justify="space-between" wrap="wrap" gap="1rem">
					<Row gap="1rem">
						<P>New password</P>
						{password && !showPassword ? (
							<FaRegEye onClick={handleShowPassword} />
						) : !password ? null : (
							<FaRegEyeSlash onClick={handleShowPassword} />
						)}
					</Row>
					<Input
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</Row>

				<Row justify="space-between" wrap="wrap" gap="1rem">
					<P>Confirm new password</P>
					<Input
						type={showPassword ? 'text' : 'password'}
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
					/>
				</Row>
				<Button
					disabled={password ? false : true}
					onClick={handleUpdateUser}
				>
					Change password
				</Button>
			</Column>
		</AccountSettingsLayout>
	);
}

export default AccountSettings;
