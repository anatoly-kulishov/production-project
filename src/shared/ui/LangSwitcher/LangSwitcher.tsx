import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '../../lib';
import { Button, ThemeButton } from '../Button';

import { LangSwitcherProps } from './LangSwitcher.declarations';

import cls from './LangSwitcher.module.scss';

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('language')}
        </Button>
    );
};
