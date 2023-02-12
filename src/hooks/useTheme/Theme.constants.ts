import {LOCAL_STORAGE_THEME_KEY} from "./Theme.context";

export enum THEME {
    LIGHT = 'light',
    DARK = 'dark',
}

export const DEFAULT_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;
