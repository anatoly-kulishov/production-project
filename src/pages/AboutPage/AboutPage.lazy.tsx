import {lazy} from "react";

export const AboutPageLazy = lazy(() =>
    import('./AboutPage').then(module => ({default: module.AboutPage}))
);