import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import useSound from 'use-sound';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useLocalStorage(
		window.matchMedia('(prefers-color-scheme: dark)').matches,
		'isDarkMode'
	);

	const [play] = useSound(
		'../src/sounds/629020__kolombooo__button-click.ogg',
		{
			volume: 0.1,
		}
	);

	function handleToggleTheme() {
		setIsDarkMode(isDark => !isDark);
		play();
	}

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark-mode');
			document.documentElement.classList.remove('light-mode');
		} else {
			document.documentElement.classList.add('light-mode');
			document.documentElement.classList.remove('dark-mode');
		}
	}, [isDarkMode]);

	return (
		<DarkModeContext.Provider
			value={{ isDarkMode, onToggleTheme: handleToggleTheme }}
		>
			{children}
		</DarkModeContext.Provider>
	);
}

function useDarkMode() {
	const context = useContext(DarkModeContext);

	if (context === undefined)
		throw new Error(
			'DarkModeContext was used outside of the DarkModeProvider'
		);

	return context;
}

export { useDarkMode, DarkModeProvider };
