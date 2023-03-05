import React, { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Sidebar } from 'widgets';

import { classNames } from 'shared/lib';

import { AppRouter, useTheme } from './providers';

import './styles/index.scss';

const App: FC = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>{t('Loading...')}</div>}>
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
