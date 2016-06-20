# kaizen-redux-action-types

The helper for Redux action types constants.

## Installation

```sh
$ npm install kaizen-redux-action-types --save
```

## Usage

```js
// actions/actionTypes.js
import Types, { async } from 'kaizen-redux-action-types';

const types = new Types(
  'SORT',
  async('FETCH_USER'),
);

export default types;
```

```js
// actions/user.js
import types from './actionTypes';

export function request() {
  return {
    type: types.get('FETCH_USER_REQUEST'),
  };
}

export function success(response) {
  return {
    type: types.get('FETCH_USER_SUCCESS'),
    payload: {
      response: response.data,
    },
  };
}

export function error(errors) {
  return {
    type: types.get('FETCH_USER_FAILURE'),
    payload: {
      errors,
    },
    error: true,
  };
}
```

## API Reference

### `new Types(types)`

```js
const types = new Types(
  'SORT',
  async('FETCH_USER'),
);

```

### `async(type)`

The shortcut to define async action types. It returns three types with suffix.

- `${type}_REQUEST`
- `${type}_SUCCESS`
- `${type}_FAILURE`

### `get(type)`

```
types.get('SORT'); // returns `SORT`
types.get('FETCH_USER_SUCCESS'); // returns `FETCH_USER_SUCCESS`
types.get('UNDEFINED_ACTION'); // An exception is thrown.
```

## Development

### Building

```sh
$ npm run build
```

### Running tests

```sh
$ npm test
```

To run test on every file change:

```sh
$ npm run test:watch
```

### Lint

```sh
$ npm run lint
```

## Footnote

kaizen-redux-action-types is inspired by https://github.com/ripeworks/redux-action-types
