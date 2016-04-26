var Geom = require('../lib/Geom.node');
var gp = require('../lib/gp.node');
var create = require('./create.js');
describe('Geom.TrimmedCurve', function() {
  it('TrimmedCurve(Geom.Curve, Double, Double, Boolean)', function() {

    // console.log('TrimmedCurve(Geom.Curve, Double, Double, Boolean)')
    const circle = create.Geom.Curve();
    // console.log('Circ')
    const res = new Geom.TrimmedCurve(circle, 0, 0.5, true);
    // console.log('Trim')
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('TrimmedCurve');
  });
});
describe('Geom.BezierCurve', function(){
  xit('poles(Array)', function(){
    var obj = create.Geom.BezierCurve();
    var res = obj.poles();
    console.log(res);
  });
    var helpers = require('./brep/testHelpers.js');

    it('BezierCurve(Array)', function() {
      var points = [
        new gp.Pnt(1, 2, 3), new gp.Pnt(2, 3, 4),
        new gp.Pnt(3, 4, 5), new gp.Pnt(4, 5, 6)
      ];
      console.log('BezierCurve(Array)')
      var res = new Geom.BezierCurve(points);
      helpers.expectType(res, 'BezierCurve');
      expect(res.nbPoles()).toBe(4);
      //console.log("WEIGHTS", res.weights());
    });


    it('BezierCurve(Array, Array)', function() {
      var points = [
        new gp.Pnt(1, 2, 3), new gp.Pnt(2, 3, 4),
        new gp.Pnt(3, 4, 5), new gp.Pnt(4, 5, 6)
      ];
      var weights = [0.1, 0.2, 0.2, 0.1];
      console.log('BezierCurve(Array)')
      var res = new Geom.BezierCurve(points, weights);
      helpers.expectType(res, 'BezierCurve');
      expect(res.nbPoles()).toBe(4);

    });
})
