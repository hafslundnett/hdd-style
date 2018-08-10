const ora = require('ora')
const zlib = require('zlib')
const fs = require('fs')
const path = require('path')
const sass = require('node-sass')
const postcss = require('postcss')

const outDir = path.join(__dirname, '../dist')

const paths = [ [ path.join(__dirname, '../main.scss'), 'bundle' ], path.join(__dirname, '../utilities') ]

const spinner = ora({
  text: 'Compiling... 😤',
  spinner: {
    interval: 80,
    frames: [ '⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏' ]
  }
}).start()

/**
 * Create list of files to process, with path and outputName
 * @param {Array} paths Array that contains paths strings or an array with [path, outputName]
 */
const getFilesToProcess = (paths) => {
  let projects = []

  for (let p of paths) {
    let outputName
    if (Array.isArray(p)) {
      ;[ p, outputName ] = p
    }

    const isDir = fs.lstatSync(p).isDirectory()

    if (!isDir) {
      projects.push({ filepath: p, outputName: outputName || path.basename(p).replace(/\.\w+$/, '') })
      continue
    }

    const dirName = path.basename(p)
    const files = fs.readdirSync(p)

    for (let name of files) {
      const filepath = path.join(p, name)
      const isDir = fs.lstatSync(filepath).isDirectory()

      if (isDir || name.startsWith('_') || name.startsWith('.')) {
        continue
      }

      outputName = path.join(dirName, name.replace(/\.\w+$/, ''))
      projects.push({ filepath, outputName })
    }
  }
  return projects
}

/**
 * Compile sass files into css
 * @param {Object} options 
 * @param {string} outputName
 * @returns {Object}  */
const compileSass = (options, outputName) => {
  return new Promise((resolve, reject) => {
    spinner.stopAndPersist(`🚧 ${outputName} 🚧`)
    spinner.start()

    try {
      const sassResult = sass.renderSync(options)

      spinner.text = `📦  node-sass successfully compiled ${outputName}: ${sassResult.stats.includedFiles.length} files`

      resolve({ sassResult, options })
    } catch (err) {
      spinner.fail(`💥 ${'Something went wrong!'}
      At line(${err.line}:${err.column}): ${err.file}
      Message: ${err.message}`)

      reject()
    }
  })
}

/**
 * Use postprocess to process output from sass
 * @param {Object} result Sass output
 */
const postprocess = ({ sassResult, options }) => {
  return postcss([ require('autoprefixer'), require('cssnano') ]).process(sassResult.css, {
    from: options.file,
    to: options.outFile
  })
}

/**
 * 
 * @param {Object} result PostCSS output  
 */
const writePostCSSFiles = (result) => {
  const buffer = new Buffer(result.css, 'utf-8')
  const gzip = zlib.gzipSync(buffer)

  fs.writeFileSync(result.opts.to, result.css)
  fs.writeFileSync(`${result.opts.to}.map`, result.map)
  fs.writeFileSync(`${result.opts.to}.gz`, gzip)
}

exports.compile = function () {
  const stopwatch = process.hrtime()

  // Create output directories if not exists
  const required = [ '../dist', '../dist/utilities' ]
  for (let dir of required) {
    const fullPath = path.join(__dirname, dir)
    if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath)
  }

  const projects = getFilesToProcess(paths)

  // Start all file transformations and store promises to know when they are done.
  const tasks = projects.map(({ filepath, outputName }) => {
    const options = {
      file: filepath,
      outFile: path.join(outDir, `${outputName}.min.css`)
    }

    return compileSass(options, outputName).then(postprocess).then(writePostCSSFiles)
  })

  spinner.text = `Autoprefixing and minifying`
  spinner.render()

  Promise.all(tasks).then(() => {
    const time = process.hrtime(stopwatch)
    const ns = Math.round(time[1] / 10000000)
    spinner.succeed(`Completed in ${time[0]}.${ns}s 🎉`)
  })
}
