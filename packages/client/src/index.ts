export function createElement(
  ...opt: Parameters<typeof document.createElement>
) {
  return document.createElement(...opt)
}

export function getUserAgent() {
  return navigator.userAgent
}
