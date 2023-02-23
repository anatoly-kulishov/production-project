import React, {FC} from "react";

import {classNames} from "shared/lib";
import {Navbar} from "widgets";

import {AppRouter, useTheme} from "app/providers";

import "./styles/index.scss";

const App: FC = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    )
}

export default App;