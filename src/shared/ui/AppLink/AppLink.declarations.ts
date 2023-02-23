import {LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'Primary',
    INVERTED = 'Inverted',
}

export interface IAppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}