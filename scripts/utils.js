// IDEA: gzip the rendered bundle

const fs = require('fs')
const path = require('path')
const watch = require('node-watch')
const Emitter = require('events')
const sass = require('node-sass')

const outDir = path.join(__dirname, '../dist')

const paths = [
  path.join(__dirname, '../main.scss'),
  path.join(__dirname, '../components'),
  path.join(__dirname, '../frameworks')
]

exports.watch = function(path, recursive = false) {
  const watcher = watch(path, { recursive })
  return watcher
}

exports.compile = function() {
  console.info('Compiling... 😤')

  let project = []

  for (let p of paths) {
    const isDir = fs.lstatSync(p).isDirectory()

    if (!isDir) {
      project.push([p, path.basename(p).replace(/\.\w+$/, '')])
      continue
    }

    const dirName = path.basename(p)
    const files = fs.readdirSync(p)

    for (let name of files) {
      const file = path.join(p, name)
      const isDir = fs.lstatSync(file).isDirectory()

      if (isDir || name.startsWith('_')) {
        continue
      }

      project.push([file, path.join(dirName, name.replace(/\.\w+$/, ''))])
    }
  }

  for (let [fileIn, nameOut] of project) {
    const options = {
      file: fileIn,
      outFile: path.join(outDir, `${nameOut}.min.css`),
      outMap: path.join(outDir, `${nameOut}.min.css.map`),
      sourceMap: true,
      outputStyle: 'compressed'
    }

    console.info('\x1b[33m%s\x1b[0m', `🚧 ${nameOut} 🚧`)

    try {
      const result = sass.renderSync(options)

      console.info('\x1b[36m%s\x1b[0m', `Successfully compiled: ${result.stats.includedFiles.length} files`)

      fs.writeFileSync(options.outFile, result.css);
      fs.writeFileSync(options.outMap, result.map);
    } catch(err) {
      console.error('\x1b[31m%s\x1b[0m', '💥 Something went wrong!')
      console.error('\x1b[31m%s\x1b[0m', `At line(${err.line}:${err.column}): ${err.file}`)
      console.error('\x1b[31m%s\x1b[0m', `Message: ${err.message}`)
    }
  }
}
