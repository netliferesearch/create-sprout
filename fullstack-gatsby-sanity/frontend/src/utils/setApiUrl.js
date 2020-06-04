import { config } from '../config';

export default function setApiUrl() {
  let envApiUrl = config.apiUrl.prod;
  let environment = 'development';
  const { hostname, hostnames, apiUrl, inDevelopment } = config;
  try {
    switch (hostname) {
      case hostnames.test:
        console.warn('Setting environment to Test');
        envApiUrl = apiUrl.test;
        break;
      case hostnames.qa:
        console.warn('Setting environment to QA');
        environment = 'production';
        envApiUrl = apiUrl.qa;
        break;
      case hostnames.prod:
        environment = 'production';
        envApiUrl = apiUrl.prod;
        break;
      case hostnames.dev:
        // Reduce noise while testing
        if (process.env.NODE_ENV !== 'test') {
          console.log('Setting environment to local');
        }
        envApiUrl = !inDevelopment ? apiUrl.test : apiUrl.dev;
        break;
      default:
        // Reduce noise while testing
        if (process.env.NODE_ENV !== 'test') {
          console.log('Setting environment to local');
        }
        envApiUrl = !inDevelopment ? apiUrl.test : apiUrl.dev;
        break;
    }
    return {
      envApiUrl,
      environment,
    };
  } catch (err) {
    console.error(err);
  }
  return null;
}
