jest.setTimeout(5e3)

let warn: jest.SpyInstance

beforeEach(() => {
  warn = jest.spyOn(console, 'warn')
  warn.mockImplementation(() => {})
})
