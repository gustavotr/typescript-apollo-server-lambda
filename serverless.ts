import type { Serverless } from 'serverless/aws';
import * as pkgJson from './package.json';

const serverlessConfiguration: Serverless = {
  service: {
    name: pkgJson.name,
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: '1',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    graphql: {
      handler: 'handler.graphqlHandler',
      events: [
        {
          http: {
            method: 'any',
            path: 'graphql',
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;
