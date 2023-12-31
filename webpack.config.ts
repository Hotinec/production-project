import { BuilEnv } from './config/types/config';
import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuilEnv) => {
  const port = env.port || 3000;
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    path: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    isDev,
    port,
  });

  return config;
};
