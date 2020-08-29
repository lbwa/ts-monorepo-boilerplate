import { getEnv } from '../src'

describe('Test server-side only method', () => {
  it('Should return a correct env variable', () => {
    expect(getEnv()).toBeInstanceOf(String)
  })
})
