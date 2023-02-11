import path from "path";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const PATHS: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const MODE = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = MODE === 'development';

    return buildWebpackConfig({
        mode: MODE,
        paths: PATHS,
        port: PORT,
        isDev,
    });
}
