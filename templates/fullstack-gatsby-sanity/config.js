const hostname =
  typeof window === 'object' && window.location.hostname !== ''
    ? window.location.hostname
    : 'localhost';

const imagesPath = './../images/';
const inDevelopment = process.env.NODE_ENV === 'development';
const inTest = process.env.NODE_ENV === 'test';

export const URL_BASE_DEV = `http://${hostname}`;

export const config = {
  hostname,
  imagesPath,
  inDevelopment,
  inTest,
};
