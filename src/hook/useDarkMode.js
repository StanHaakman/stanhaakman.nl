import {useEffect, useState} from "react";

export default function useDarkMode () {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let curHr = new Date().getHours();

    let dark = (curHr < 8 || curHr > 18) || prefersDark

    const [theme, setTheme] = useState(dark ? 'dark' : 'light');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [colorTheme, theme])
    return [colorTheme, setTheme];
}