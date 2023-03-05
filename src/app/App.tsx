import React, { FC, Suspense } from 'react';

import { classNames } from 'shared/lib';
import { Navbar, Sidebar } from 'widgets';

import { AppRouter, useTheme } from './providers';

import './styles/index.scss';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
