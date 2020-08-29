jest.setTimeout(5e3)

let warn: jest.SpyInstance

beforeEach(() => {
  warn = jest.spyOn(console, 'warn')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  warn.mockImplementation(() => {})
})
