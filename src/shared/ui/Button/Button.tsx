import {FC} from "react";

import {classNames} from "shared/lib";

import {ButtonProps} from "./Button.declarations";

import cls from './Button.module.scss';

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

