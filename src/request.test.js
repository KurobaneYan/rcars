import request from 'request'

const url = 'http://localhost:1337/api/cars/mostpopular/25/'

it('gets cars', async () => {
  const data = await request(url)
  expect(data).not.toBeUndefined()
})
