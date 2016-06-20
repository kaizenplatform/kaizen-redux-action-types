import flattenDeep from 'lodash.flattendeep';

export default class Types {
  constructor(...args) {
    this.types = {};
    flattenDeep(args).forEach((type) => {
      this.types[type] = type;
    });
  }

  get(key) {
    if (key === null || key === undefined) {
      throw new Error('Calling get() with null or undefined argument');
    }
    if (!(key in this.types)) {
      throw new Error(`Action types "${key}" is not defined`);
    }
    return this.types[key];
  }
}

export function async(type) {
  return [`${type}_REQUEST`, `${type}_SUCCESS`, `${type}_FAILURE`];
}
