import { createElement, getUserAgent } from '../src'

describe('Test browser-only methods', () => {
  it('Should pass all tests', () => {
    expect(createElement('div')).toBeInstanceOf(HTMLDivElement)
    expect(getUserAgent()).toContain('jsdom')
  })
})
