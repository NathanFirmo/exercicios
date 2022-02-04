const multiply = require('./Multiply')

test('Multiply 5 times 5 equals 25', () => {
  expect(multiply(5, 5)).toBe(25)
})
