import React, {FC} from "react";

import { classNames } from "shared/lib";
import {Navbar} from "widgets";

import {useTheme} from "./providers";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

export const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>
                Toggle
            </button>
        </div>
    )
} 