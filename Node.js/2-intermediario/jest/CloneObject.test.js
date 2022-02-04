test('Clone an object without referencing memory address', () => {
  let object = {
    name: 'John Doe',
    age: 26,
    habilities: {
      teachMath: true
    }
  }
  let newObject = JSON.parse(JSON.stringify(object))
  newObject.habilities.teachMath = undefined
  expect(object).toEqual({
    name: 'John Doe',
    age: 26,
    habilities: {
      teachMath: true
    }
  })
})