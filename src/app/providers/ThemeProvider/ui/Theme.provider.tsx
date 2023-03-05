import { FC, useMemo, useState } from 'react';

import { DEFAULT_THEME, Theme, ThemeContext } from '../lib';

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
