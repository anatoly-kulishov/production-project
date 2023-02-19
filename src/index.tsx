import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {App, ThemeProvider} from "app";
 
const app = (
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);

render(app, document.getElementById('root'));