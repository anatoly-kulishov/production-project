import React, { FC } from 'react';

import { classNames } from 'shared/lib';
import { Theme, useTheme } from 'app/providers';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from '../../Button';
import { IThemeSwitcherProps } from './ThemeSwitcher.declarations';

import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
