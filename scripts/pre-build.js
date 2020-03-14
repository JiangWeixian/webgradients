const fs = require('fs-extra')
const mustache = require('mustache')
const gradients = require('../gradients.json')
const path = require('path')
const CamelCase = require('lodash.camelcase')

const gradientsTpl = fs.readFileSync(
  path.resolve(__dirname, '../templates/webgradients/gradients.tsx.tpl'),
)
const entryTpl = fs.readFileSync(path.resolve(__dirname, '../templates/index.ts.tpl'))

gradients.forEach(v => {
  const name = v.name.replace(/\s/g, '')
  const result = mustache.render(gradientsTpl.toString(), {
    styledname: `Styled${name}`,
    name,
    deg: `${v.deg}deg`,
    colors: v.gradient.map(g => `${g.color} ${g.pos}%`).join(', '),
  })
  fs.outputFileSync(path.resolve(__dirname, `../src/webgradients/${name}.tsx`), result)
})

const all = gradients.map(v => {
  const name = v.name.replace(/\s/g, '')
  return { export: `export { ${name} } from './webgradients/${name}'` }
})

const result = mustache.render(entryTpl.toString(), {
  exports: all,
})

fs.outputFileSync(path.resolve(__dirname, `../src/index.ts`), result)
