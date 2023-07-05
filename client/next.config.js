/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  typescript: {},
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  distDir: '.next',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "./common/_variables.scss";`,
  },
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@apis/(.*)$': '<rootDir>/apis/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@libs/(.*)$': '<rootDir>/libs/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@interfaces/(.*)$': '<rootDir>/interfaces/$1',
    '^@images/(.*)$': '<rootDir>/images/$1',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
  },
  trailingSlash: true,
  swcMinify: true,
};
