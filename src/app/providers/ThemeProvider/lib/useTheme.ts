import {useState} from "react";

import {DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY, THEME} from "./Theme.constants";
import {IUseThemeResult} from "./Theme.declarations";

export const useTheme = (): IUseThemeResult => {
    const [theme, setTheme] = useState<THEME>(DEFAULT_THEME);

    const toggleTheme = () => {
        const newTheme = theme == THEME.DARK ? THEME.LIGHT : THEME.DARK;

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    }

    return {theme, toggleTheme}
}