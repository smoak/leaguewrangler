import { get } from './cookies';

describe('cookies', () => {
  let lastWrittenCookie: string | undefined;

  beforeEach(() => {
    Object.defineProperty(window.document, 'cookie', {
      configurable: true,
      get: jest.fn().mockImplementation(() => lastWrittenCookie),
      set: jest.fn().mockImplementation(value => {
        lastWrittenCookie = value;
      }),
    });
  });

  describe('#get', () => {
    let value: string | undefined;

    describe('when the cookie specified is present', () => {
      beforeEach(() => {
        document.cookie = 'foo=42';
        value = get('foo');
      });

      it('returns the cookie value', () => {
        expect(value).toEqual('42');
      });
    });

    describe('when the cookie specified is not present', () => {
      beforeEach(() => {
        document.cookie = '';
        value = get('foo');
      });

      it('returns undefined', () => {
        expect(value).toBeUndefined();
      });
    });
  });
});
