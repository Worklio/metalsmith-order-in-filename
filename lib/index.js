'use strict'

//const minimatch = require('minimatch')
//const { each, lastIndexOf, words, capitalize } = require('lodash')
const path = require('path')

module.exports = (options = {}) => ((files, metalsmith, done) => {

  each(files, (fileMeta, filePath) => {

    let fileName = path.basename(filePath)
    
    console.log(filePath);
  })

  done()
})
