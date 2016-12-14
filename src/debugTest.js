var Mocha = require('mocha')
var mocha = new Mocha()
var file = process.argv[2]
mocha.addFile(file);
mocha.run();
