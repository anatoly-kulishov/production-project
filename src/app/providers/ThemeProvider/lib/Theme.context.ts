import { createContext } from 'react';

import { IThemeContextProps } from './Theme.declarations';

export const ThemeContext = createContext<IThemeContextProps>({});
