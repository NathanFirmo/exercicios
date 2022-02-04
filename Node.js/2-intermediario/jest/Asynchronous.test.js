const api = require('./Asynchronous')

test('Test asynchronous code', async () => {
  const { data } = await api()
  expect(data).toBeDefined()
})