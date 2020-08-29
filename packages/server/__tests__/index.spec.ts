import { getEnv } from '../src'

describe('Test server-side only methods', () => {
  it('Should return a correct env variable', () => {
    expect(getEnv()).toContain('test')
  })
})
