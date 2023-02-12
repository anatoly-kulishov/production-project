import {FC, useMemo, useState} from "react";

import {ThemeContext} from "./Theme.context";
import {DEFAULT_THEME, THEME} from "./Theme.constants";

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<THEME>(DEFAULT_THEME);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}