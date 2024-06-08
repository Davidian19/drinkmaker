/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/media/',
          publicPath: '/_next/static/media/',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
