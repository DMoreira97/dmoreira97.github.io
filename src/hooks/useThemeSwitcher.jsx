import { useEffect, useState } from 'react';
import developerLight from '../images/developer.svg';
import developerDark from '../images/developer-dark.svg';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(localStorage.theme);
	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
		if (window.document.getElementById('main-image'))
			window.document.getElementById('main-image').src = theme === 'dark' ? developerDark : developerLight;
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
