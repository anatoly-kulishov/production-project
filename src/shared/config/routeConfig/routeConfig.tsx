import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage/ui/MainPage';
import { AboutPage } from 'pages/AboutPage/ui/AboutPage';

export enum AppRoutes {
    MAIN = 'Main',
    ABOUT = 'About',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.Main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.About,
        element: <AboutPage />,
    },
};
