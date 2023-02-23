import React, {FC} from 'react';

import {AppRoutes, RoutePath} from "shared/config";
import {AppLink, AppLinkTheme, ThemeSwitcher} from "shared/ui";
import {classNames} from "shared/lib";

import {INavbarProps} from "./Navbar.declarations";

import cls from "./Navbar.module.scss"

export const Navbar: FC<INavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.Links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.Main} className={cls.MainLink}>{AppRoutes.MAIN}</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.About}>{AppRoutes.ABOUT}</AppLink>
            </div>
        </div>
    );
};

