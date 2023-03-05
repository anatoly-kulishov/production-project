import { RouteProps } from 'react-router-dom';

import { AboutPage, MainPage, NotFoundPage } from 'pages';

export enum AppRoutes {
  MAIN = 'Main',
  ABOUT = 'About',
  NOT_FOUND = 'NotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.NotFound,
        element: <NotFoundPage />,
    },
};
