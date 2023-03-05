import { Theme } from './Theme.constants';

export interface IThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}
