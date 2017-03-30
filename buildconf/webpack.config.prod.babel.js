/**
 * Created by joshoy on 2017/3/29.
 */

import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import baseConfigFn from './webpack.config.base.babel';

const enableBundleAnalyzer = true;

const config = baseConfigFn('production');
const prjRoot = p => path.resolve(__dirname, '../', p);

config.plugins.pop(); // LoaderOptionsPlugin
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin(),
);
config.plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false,
  options: {
    context: prjRoot('.'),
    postcss: [require('autoprefixer')],
  },
}));
if (enableBundleAnalyzer) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

export default config;