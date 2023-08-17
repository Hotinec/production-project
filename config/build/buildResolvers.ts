import { BuildOptions } from '../types/config';
import webpack from 'webpack';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.path.src, 'node_modules'],
    alias: {},
    mainFiles: ['index'],
  };
}
