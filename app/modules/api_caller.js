'use strict';

const childProcess = require('child_process');

/**
  args: { api: python api name, json: args for python api}
  return: api result with json format
*/
const moduleApiCaller = {
  callApi: function(args) {
    console.log("call api: " + args);
    var result = null;
    childProcess.exec(
      `python ${global.backendDir}/${args.api} ${args.json}`,
      function(error, stdout, stderr) {
        if (stdout) {
          console.log('stdout: ' + stdout);
          result = stdout;
        }
        if (stderr) {
          console.log('stderr: ' + stderr);
          result = stderr;
        }
        if (error !== null) {
          console.log('exec error: ' + error);
          result = error;
        }
      }
    );
    return result;
  }
};

module.exports = moduleApiCaller;
