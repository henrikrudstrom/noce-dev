var gp = require('../../lib/gp.js');

var currentDouble = 0;
function nextDouble() {
  currentDouble += 1;
  return currentDouble;
}

var create = {
  xyz() {
    return new gp.XYZ(nextDouble(), nextDouble(), nextDouble());
  },
  vec() {
    return new gp.Vec(nextDouble(), nextDouble(), nextDouble());
  },
  pnt() {
    return new gp.Pnt(nextDouble(), nextDouble(), nextDouble());
  },
  dir() {
    return new gp.Dir(nextDouble(), nextDouble(), nextDouble());
  },
  ax1() {
    return new gp.Ax1(
      create.pnt(), create.dir()
    );
  },
  ax2() {
    return new gp.Ax2(
      create.pnt(), create.dir(), create.dir()
    );
  },
  ax3() {
    return new gp.Ax3(
      create.pnt(), create.dir(), create.dir()
    );
  },
  trsf() {
    return new gp.Trsf();
  }
};

module.exports = create;
