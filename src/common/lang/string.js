const camelizeRE = /-(\w)/g
export function camelize(str) {
  str = String(str)
  return str.replace(camelizeRE, (m, c) => (c ? c.toUpperCase() : ''))
}
