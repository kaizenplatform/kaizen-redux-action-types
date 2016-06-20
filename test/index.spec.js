import assert from 'power-assert';
import Types, { async } from '../lib';

describe('redux-action-types', () => {
  const types = new Types(
    'FILTER',
    async('FETCH_USER'),
  );

  describe('instance', () => {
    it('should instance of Types', () => {
      assert(types instanceof Types);
    });

    it('should have a get() method', () => {
      assert(typeof types.get === 'function');
    });
  });

  describe('get()', () => {
    it('should return an action type', () => {
      assert(types.get('FILTER') === 'FILTER');
    });

    it('should return async action types', () => {
      assert(types.get('FETCH_USER_REQUEST') === 'FETCH_USER_REQUEST');
      assert(types.get('FETCH_USER_SUCCESS') === 'FETCH_USER_SUCCESS');
      assert(types.get('FETCH_USER_FAILURE') === 'FETCH_USER_FAILURE');
    });

    it('should throw exception with undefined argument', () => {
      assert.throws(() => types.get());
    });

    it('should throw exception with null argument', () => {
      assert.throws(() => types.get(null));
    });

    it('should throw exception with unknown key', () => {
      assert.throws(() => types.get('UNKNOWN_KEY'));
    });
  });
});
