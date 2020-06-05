import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});

// Mock client
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock navigator
const navigatorMock = {
  msSaveOrOpenBlob: jest.fn(),
  platform: jest.fn(),
  serviceWorker: jest.fn(),
  userAgent: jest.fn(),
  vendor: jest.fn(),
};
global.navigator = navigatorMock;

// Mock location
const locationMock = {
  ancestorOrigins: jest.fn(),
  hash: jest.fn(),
  host: jest.fn(),
  hostname: jest.fn(),
  href: jest.fn(),
  origin: jest.fn(),
  pathname: jest.fn(),
  port: jest.fn(),
  protocol: jest.fn(),
  search: jest.fn(),
};
global.location = locationMock;

// Gatsby
// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
};
