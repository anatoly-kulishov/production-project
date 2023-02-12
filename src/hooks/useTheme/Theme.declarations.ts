import {THEME} from "./Theme.constants";

export interface IThemeContext {
    theme?: THEME;
    setTheme?: (theme: THEME) => void;
}

export interface IUseThemeResult {
    toggleTheme: () => void;
    theme: THEME;
}