import { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../../ui/Toggle';
import { Row } from '../../ui/Row';
import { FaVolumeMute } from 'react-icons/fa';
import { FaVolumeUp } from 'react-icons/fa';
import { useSettings } from '../../contexts/SettingsContext';

const SoundSettingsLayout = styled.div`
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

	& > * {
		grid-column: 1/-1;
		width: 100%;
		background-color: var(--color-bg-sec);
		padding: 2rem;
		border-radius: 3px;
	}

	& > :last-child,
	& > :nth-child(4) {
		& > :first-child {
			& > svg {
				font-size: 1.4rem;
				color: var(--color-el-light-main);
			}
			padding: 2rem;
		}

		& > :last-child {
			width: max(50%, 20rem);
		}
	}
`;

const P = styled.p`
	font-size: 1.2rem;
	font-weight: 500;
	justify-self: start;
	color: var(--color-text-btn);
`;

const Volume = styled.input`
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 0.75rem;
	outline: none;
	border: none;
	border-radius: 50rem;
	opacity: 0.7;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;
	background: var(--color-el-light-main);

	&:hover {
		opacity: 1;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		cursor: pointer;
		background: var(--color-bg-main);
		border: 1.5px solid var(--color-el-sec);
	}

	&::-moz-range-thumb {
		width: 25px;
		height: 25px;
		cursor: pointer;
	}

	&:disabled {
		opacity: 0.1;
	}
`;

function SoundSettings() {
	const [soundEffectsVolume, setSoundEffectsVolume] = useState(0);
	const [musicVolume, setMusicVolume] = useState(0);

	const { dispatch } = useSettings();

	function handleChangeVolume(volume) {
		setSoundEffectsVolume(volume);
		dispatch({ type: 'sound/changeVolume', payload: volume });
	}

	function handleChangeMusicVolume(volume) {
		setMusicVolume(volume);
		dispatch({ type: 'sound/changeMusicVolume', payload: volume });
	}

	return (
		<SoundSettingsLayout>
			<Row justify="space-between">
				<P>User interface sound effects</P>
				<Toggle
					onToggle={() =>
						dispatch({
							type: 'sound/toggleSoundEffects',
						})
					}
				/>
			</Row>

			<Row justify="space-between">
				<P>Background music</P>
				<Toggle
					onToggle={() =>
						dispatch({ type: 'sound/toggleBackgroundMusic' })
					}
				/>
			</Row>

			<Row justify="space-between">
				<P>Winner music</P>
				<Toggle
					onToggle={() =>
						dispatch({ type: 'sound/toggleWinnerMusic' })
					}
				/>
			</Row>

			<Row justify="space-between">
				<Row align="center" gap="1rem">
					<P>Volume</P>
					{Number(soundEffectsVolume) === 0 ? (
						<FaVolumeMute />
					) : (
						<FaVolumeUp />
					)}
				</Row>
				<P>{soundEffectsVolume}%</P>
				<Volume
					type="range"
					min="0"
					max="100"
					value={soundEffectsVolume}
					onChange={e => handleChangeVolume(e.target.value)}
					// disabled
				/>
			</Row>

			<Row justify="space-between">
				<Row align="center" gap="1rem">
					<P>Music</P>
					{Number(musicVolume) === 0 ? (
						<FaVolumeMute />
					) : (
						<FaVolumeUp />
					)}
				</Row>
				<P>{musicVolume}%</P>
				<Volume
					type="range"
					min="0"
					max="100"
					value={musicVolume}
					onChange={e => handleChangeMusicVolume(e.target.value)}
					// disabled
				/>
			</Row>
		</SoundSettingsLayout>
	);
}

export default SoundSettings;
