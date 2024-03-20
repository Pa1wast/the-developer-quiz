import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

function NavbarProvider({ children }) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	function handleClick() {
		setIsNavbarOpen(isOpen => !isOpen);
	}

	return (
		<NavbarContext.Provider value={{ isNavbarOpen, onClick: handleClick }}>
			{children}
		</NavbarContext.Provider>
	);
}

function useNavbar() {
	const context = useContext(NavbarContext);

	if (context === undefined)
		throw new Error(
			'DarkModeContext was used outside of the NavbarProvider'
		);

	return context;
}

export { useNavbar, NavbarProvider };
