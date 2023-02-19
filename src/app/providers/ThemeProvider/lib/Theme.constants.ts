export enum THEME {
    LIGHT = 'light',
    DARK = 'dark',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const DEFAULT_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;

