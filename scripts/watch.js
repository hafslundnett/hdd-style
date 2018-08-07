const path = require('path')
const utils = require('./utils')

const dirs = [
  path.join(__dirname, '../components'),
  path.join(__dirname, '../utilities'),
  path.join(__dirname, '../variables')
]

for (let dir of dirs) {
  const watcher = utils.watch(dir, true)
  watcher.on('change', utils.compile)
}

utils.compile()
