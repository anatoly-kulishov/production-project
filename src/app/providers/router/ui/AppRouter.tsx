import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config';
import { PageLoader } from 'shared/ui/PageLoader';

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
