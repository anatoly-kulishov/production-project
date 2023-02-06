import webpack from "webpack";

import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";

export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
    const {mode, paths} = option;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(option),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}