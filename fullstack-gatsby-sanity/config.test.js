import { config } from './config';

describe('Test config', () => {
  describe('hostname', () => {
    it('hostname', () => {
      expect(config.hostname).toEqual('http://localhost');
    });
    it('imagesPath', () => {
      expect(config.imagesPath).toEqual('./../images/');
    });
    it('inDevelopment', () => {
      expect(config.inDevelopment).toEqual(false);
    });
    it('inTest', () => {
      expect(config.inTest).toEqual(true);
    });
  });
});
