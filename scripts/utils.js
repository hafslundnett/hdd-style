const fs = require('fs')
const path = require('path')
const watch = require('node-watch')
const Emitter = require('events')

exports.watch = function(path, recursive = false) {
  const watcher = watch(path, { recursive })
  return watcher
}
