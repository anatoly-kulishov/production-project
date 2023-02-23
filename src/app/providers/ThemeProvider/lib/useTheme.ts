import {useContext} from "react";

import {LOCAL_STORAGE_THEME_KEY, Theme} from "./Theme.constants";
import {ThemeContext} from "./Theme.context";
import {IUseThemeResult} from "./Theme.declarations";

export function useTheme(): IUseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}