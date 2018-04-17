// IDEA: gzip the rendered bundle

const zlib = require('zlib')
const fs = require('fs')
const path = require('path')
const watch = require('node-watch')
const Emitter = require('events')
const sass = require('node-sass')

const outDir = path.join(__dirname, '../dist')

const paths = [
  path.join(__dirname, '../main.scss'),
  path.join(__dirname, '../frameworks')
]

exports.watch = function(path, recursive = false) {
  const watcher = watch(path, { recursive })
  return watcher
}

exports.compile = function() {
  const required = ['../dist', '../dist/frameworks']
  for (let dir of required) {
    const fullPath = path.join(__dirname, dir)
    if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath)
  }

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

      if (isDir || name.startsWith('_') ||  name.startsWith('.')) {
        continue
      }

      project.push([file, path.join(dirName, name.replace(/\.\w+$/, ''))])
    }
  }

  console.time('compiled')

  for (let [fileIn, nameOut] of project) {
    const options = {
      file: fileIn,
      outFile: path.join(outDir, `${nameOut}.min.css`),
      outGzip: path.join(outDir, `${nameOut}.min.css.gz`),
      outMap: path.join(outDir, `${nameOut}.min.css.map`),
      sourceMap: true,
      outputStyle: 'compressed'
    }

    console.info('\x1b[33m%s\x1b[0m', `🚧 ${nameOut} 🚧`)

    try {
      const result = sass.renderSync(options)

      console.info('\x1b[36m%s\x1b[0m', `Successfully compiled: ${result.stats.includedFiles.length} files`)

      const buffer = new Buffer(result.css, 'utf-8')
      const gzip = zlib.gzipSync(buffer);

      fs.writeFileSync(options.outFile, result.css);
      fs.writeFileSync(options.outMap, result.map);
      fs.writeFileSync(options.outGzip, gzip);
    } catch(err) {
      console.error('\x1b[31m%s\x1b[0m', '💥 Something went wrong!')
      console.error('\x1b[31m%s\x1b[0m', `At line(${err.line}:${err.column}): ${err.file}`)
      console.error('\x1b[31m%s\x1b[0m', `Message: ${err.message}`)
    }
  }

  console.timeEnd('compiled')
}
