// IDEA: gzip the rendered bundle

const fs = require('fs')
const path = require('path')
const sass = require('node-sass');

const fileIn = path.join(__dirname, '../src/main.scss')
const fileOut = path.join(__dirname, '../dist/bundle.min.css')
const mapOut = path.join(__dirname, '../dist/bundle.min.css.map')

console.info('Compiling... 😤')

var result = sass.renderSync({
  file: fileIn,
  outFile: fileOut,
  sourceMap: true,
  outputStyle: 'compressed'
})

for (let file of result.stats.includedFiles) {
  console.info(`- ${file}`)
}

fs.writeFileSync(fileOut, result.css);
fs.writeFileSync(mapOut, result.map);

console.info('Compilation was a success! 😎 🍺')
