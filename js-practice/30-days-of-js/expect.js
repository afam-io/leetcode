/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
  const throwError = (err) => {
    throw new Error(err);
  };
  const obj = {
    toBe: (x) => (x === val ? true : throwError('Not Equal')),
    notToBe: (x) => (x !== val ? true : throwError('Equal')),
  };
  return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
