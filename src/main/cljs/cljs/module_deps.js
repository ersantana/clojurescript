var path = require("path");var mdeps = require('module-deps');var JSONStream = require('JSONStream');var md = mdeps();md.pipe(JSONStream.stringify()).pipe(process.stdout);md.end({file: path.resolve(path.join(__dirname, 'JS_FILE')) });