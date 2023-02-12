import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {App} from "./App";
import {ThemeProvider} from "./hooks";

const app = (
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);

render(app, document.getElementById('root'));