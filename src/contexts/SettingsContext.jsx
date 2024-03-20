import { createContext, useContext, useReducer } from 'react';

const SettingsContext = createContext();

const initialState = {
	scoreType: 'percentage',
	showHintsUsed: true,
	showTimeSpent: true,
	showCategoryScore: true,
	isSoundEffects: true,
	isBackgroundMusic: false,
	isWinnerMusic: true,
	volume: 50,
	music: 50,
	fullName: '',
	username: '',
	profilePicture: '',
	email: '',
};

function reducer(state, { type, payload }) {
	switch (type) {
		case 'auth/setUser':
			return {
				...state,
				firstName: payload.firstName,
				lastName: payload.lastName,
				profilePicture: payload.profilePicture,
				email: payload.email,
				username: payload.username,
			};

		case 'display/toggleShowHintsUsed':
			return {
				...state,
				showHintsUsed: state.showHintsUsed ? false : true,
			};
		case 'display/toggleShowTimeSpent':
			return {
				...state,
				showTimeSpent: state.showTimeSpent ? false : true,
			};
		case 'display/toggleShowCategoryScore':
			return {
				...state,
				showCategoryScore: state.showCategoryScore ? false : true,
			};

		case 'display/selectScoreType':
			return {
				...state,
				scoreType: payload,
			};

		case 'sound/toggleSoundEffects':
			return {};

		case 'sound/changeVolume':
			return {
				...state,
				volume: payload / 100,
			};

		case 'sound/changeMusicVolume':
			return {
				...state,
				music: payload / 100,
			};

		case 'sound/toggleBackgroundMusic':
			return {
				...state,
				isBackgroundMusic: state.isBackgroundMusic ? false : true,
			};
		case 'sound/toggleWinnerMusic':
			return {
				...state,
				isWinnerMusic: state.isWinnerMusic ? false : true,
			};

		case 'account/updateFullName':
			return {};

		case 'account/updateUsername':
			return {};

		case 'account/updateProfilePicture':
			return {};

		case 'account/logout':
			return {};

		default:
			throw new Error('Action type unknown');
	}
}

function SettingsProvider({ children }) {
	const [
		{
			scoreType,
			showHintsUsed,
			showTimeSpent,
			showCategoryScore,
			isSoundEffects,
			isBackgroundMusic,
			isWinnerMusic,
			volume,
			music,
			fullName,
			username,
			profilePicture,
			email,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	return (
		<SettingsContext.Provider
			value={{
				isWinnerMusic,
				scoreType,
				showHintsUsed,
				showTimeSpent,
				showCategoryScore,
				isSoundEffects,
				isBackgroundMusic,
				volume,
				music,
				fullName,
				username,
				profilePicture,
				email,
				dispatch,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
}

function useSettings() {
	const context = useContext(SettingsContext);

	if (context === undefined)
		throw new Error(
			'SettingsContext was used outside of the SettingsProvider!'
		);

	return context;
}

export { useSettings, SettingsProvider };
