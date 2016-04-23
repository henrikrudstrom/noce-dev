var brep = require('../lib/brep.js');
var Geom = require('../lib/Geom.js');
var gp = require('../lib/gp.js');

describe('explorer', function() {
  var axis = new gp.Ax3(new gp.Pnt(0, 0, 0), new gp.Dir(0, 1, 0), new gp.Dir(0, 0, 1));
  var sphereSurface = new Geom.Plane(axis);
  var sphere = brep.makeFace(sphereSurface, 0, Math.pi * 1, 0, Math.pi * 2, 0.01);
  console.log(sphere)
  var explorer = new brep.Explorer(sphere, 7, 8);
  while (explorer.more()) {
    console.log(explorer.current())
    explorer.next();
  }
});
