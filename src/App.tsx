import React, {FC, Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageLazy, MainPageLazy} from "./pages";
import {classNames} from "./utils";
import {useTheme} from "./hooks";

import "./styles/index.scss";

export const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
                Toggle
            </button>
            {' '}
            <Link to="/">Main</Link>
            {' '}
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageLazy/>}/>
                    <Route path="/" element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}