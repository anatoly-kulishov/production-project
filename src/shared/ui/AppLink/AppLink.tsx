import { FC } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib';

import { AppLinkTheme, IAppLinkProps } from './AppLink.declarations';

import cls from './AppLink.module.scss';

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {
        children, className, to, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
