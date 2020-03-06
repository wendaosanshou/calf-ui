export const warn = function(msg) {
  console.warn(`[calf-ui warn]: ${msg}`)
}

export const tip = function(msg, componentName) {
  if (process.env.NODE_ENV !== 'production') {
    const component = componentName ? `<${componentName}> ` : ''
    console.warn(`[Cube tip]: ${component}${msg}`)
  }
}
