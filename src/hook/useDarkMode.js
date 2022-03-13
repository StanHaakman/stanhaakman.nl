import {useEffect, useState} from "react";

export default function useDarkMode () {
    console.log('hoi');
    const [theme, setTheme] = useState('light');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [colorTheme, theme])
    return [colorTheme, setTheme];
}