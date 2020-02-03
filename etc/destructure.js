const createAction = (type) => {
  const SUCCESS = `${type}_REQUEST_SUCCESS`;
  const FAILURE = `${type}_REQUEST_FAILURE`;

  return [type, SUCCESS, FAILURE];
}

const [REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE] = createAction('auth/REQUEST');

console.log(REQUEST);
console.log(REQUEST_SUCCESS);
console.log(REQUEST_FAILURE);