const expect = require('chai').expect;

const gp = require('../lib/gp');
const geom2d = require('../lib/geom2d');
describe('js prototype', function() {
  it('can attach methods to an wrapped class prototype', function() {
    Object.getPrototypeOf(gp.Vec.prototype).hello = function() {
      return 'Hi';
    };
    var pnt1 = new gp.Vec(1, 2, 3);
    expect(pnt1.hello()).to.equal('Hi');
    var pnt2 = pnt1.added(new gp.Vec(1, 2, 3));
    expect(pnt2.hello()).to.equal('Hi');
    expect(pnt1.prototype).to.equal(pnt2.prototype);
  });

  it('can attach methods to base classes prototype', function() {
    var pnt = new gp.Pnt2d(1, 2);
    var dir = new gp.Dir2d(0, 1);
    var ax = new gp.Ax2d(pnt, dir);
    var circle1 = new geom2d.Circle(ax, 10.0, true);
    var circle2 = circle1.reversed();
    Object.getPrototypeOf(geom2d.Curve.prototype).helloCurve = function() { return 'hi'; };
    Object.getPrototypeOf(geom2d.Circle.prototype).hello = function() { return 'hi'; };
    expect(circle1.hello()).to.equal('hi');
    expect(circle2.hello()).to.equal('hi');
    expect(circle1.helloCurve()).to.equal('hi');
    expect(circle2.helloCurve()).to.equal('hi');
  });
});
