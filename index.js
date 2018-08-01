'use strict'

const { words, capitalize } = require('lodash');
const path = require('path');

module.exports = (options = {}) => ((files, metalsmith, done) => {
  let re = /^(\d+)\s(.*)$/;

  Object.keys(files).forEach(function(file){
    let data = files[file];


    let filePath = path.parse(file);
    let title = filePath.name;
    let order;

    let segments = title.match(re);
    if (segments==null) {
      if( title.match(/^\d+$/) ) {
        order = Number(title);
      }
    }
    else {
      order = Number(segments[1]);
      title = segments[2];
    }

    data.order = order;
    if(data.title == undefined)
      data.title = words(title).map(capitalize).join(' ');
    
  });

  done();
})
