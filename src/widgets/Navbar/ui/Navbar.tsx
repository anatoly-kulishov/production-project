import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

import {RoutePath} from "shared/config";
import {AppLink, AppLinkTheme} from "shared/ui";
import {classNames} from "shared/lib";

import {INavbarProps} from "./Navbar.declarations";

import cls from "./Navbar.module.scss"

export const Navbar: FC<INavbarProps> = ({className}) => {
    const i18Main = useTranslation('main');
    const i18About = useTranslation('about');

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.Links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.Main} className={cls.MainLink}>
                    {i18Main.t('main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.About}>
                    {i18About.t('about')}
                </AppLink>
            </div>
        </div>
    );
};

