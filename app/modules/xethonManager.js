'use strict';

const fs = require("fs");

// file manager

const fileManager = {
  makeFile: function(path, filename, data) {
    fs.writeFile(`${path}/${filename}`, data, function(error) {
      console.log(error);
    });
  },
  readFile: function(path, filename) {
    fs.readFile(`${path}/${filename}`, 'utf8', function (error, text) {
      console.log('text file!');
      console.log(text);
      console.log('error!?');
      console.log(err);
      return text;
    });
  },
  getHomeDir: function() {
    return global.homeDir;
  }
}

// xethon manager

const xethonManager = {

};

module.exports = xethonManager;
