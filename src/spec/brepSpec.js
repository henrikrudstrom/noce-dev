var brep = require('../lib/brep.node');
var Geom = require('../lib/Geom.node');
var gp = require('../lib/gp.node');
var create = require('./create.js')
describe('brep', function() {
  it('makeEdge(Geom.Curve)', function() {
    // console.log('makeEdge(Geom.Curve)')
    var res = brep.makeEdge(create.Geom.Curve());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  it('makeEdge(Geom.Curve, Double, Double)', function() {
    // console.log('makeEdge(Geom.Curve, Double, Double)')
    var res = brep.makeEdge(create.Geom.Curve(), 0.5, 1);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  it('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt)', function() {
    // console.log('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt)')
    var p1 = new gp.Pnt(0, 0, 0);
    var p2 = new gp.Pnt(5, 0, 0);
    var line = new Geom.Line(p1, new gp.Dir(1, 0, 0));
    var res = brep.makeEdge(line, p1, p2);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  xit('makeEdge(Geom.Curve, brep.Vertex, brep.Vertex)', function() {
    // console.log('makeEdge(Geom.Curve, brep.Vertex, brep.Vertex)')
    var res = brep.makeEdge(create.Geom.Curve(), create.brep.Vertex(), create.brep.Vertex());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  xit('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt, Double, Double)', function() {
    // console.log('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt, Double, Double)')
    var p1 = new gp.Pnt(0, 0, 0);
    var p2 = new gp.Pnt(5, 0, 0);
    var line = new Geom.Line(p1, new gp.Dir(1, 0, 0));
    var res = brep.makeEdge(line, p1, p2, 0.2, 0.7);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  xit('makeEdge(Geom.Curve, brep.Vertex, brep.Vertex, Double, Double)', function() {
    // console.log('makeEdge(Geom.Curve, brep.Vertex, brep.Vertex, Double, Double)')
    var res = brep.makeEdge(create.Geom.Curve(), create.brep.Vertex(), create.brep.Vertex(), 2.5, 3);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });

  xit('makeWire()', function() {
    // console.log('makeWire()')
    var res = brep.makeWire();
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Wire');
  });

  xit('makeWire(brep.Edge, brep.Edge)', function() {
    // console.log('makeWire(brep.Edge, brep.Edge)')
    var res = brep.makeWire(create.brep.Edge(), create.brep.Edge());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Wire');
  });


  xit('makeWire(brep.Edge, brep.Edge, brep.Edge)', function() {
    // console.log('makeWire(brep.Edge, brep.Edge, brep.Edge)')
    var res = brep.makeWire(create.brep.Edge(), create.brep.Edge(), create.brep.Edge());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Wire');
  });


  xit('makeWire(brep.Edge, brep.Edge, brep.Edge, brep.Edge)', function() {
    // console.log('makeWire(brep.Edge, brep.Edge, brep.Edge, brep.Edge)')
    var res = brep.makeWire(create.brep.Edge(), create.brep.Edge(), create.brep.Edge(), create.brep.Edge());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Wire');
  });


  xit('makeWire(brep.Wire, brep.Edge)', function() {
    // console.log('makeWire(brep.Wire, brep.Edge)')
    var res = brep.makeWire(create.brep.Wire(), create.brep.Edge());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Wire');
  });

  xit('makeFace(brep.Face)', function() {
    // console.log('makeFace(brep.Face)')
    var res = brep.makeFace(create.brep.Face());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Face');
  });


  xit('makeFace(brep.Wire, Boolean)', function() {
    // console.log('makeFace(brep.Wire, Boolean)')
    var res = brep.makeFace(create.brep.Wire(), true);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Face');
  });

  xit('makeShell(Geom.Surface, Boolean)', function() {
    var res = brep.makeShell(create.Geom.SphericalSurface(), false);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shell');
  });


  xit('makeShell(Geom.Surface, Double, Double, Double, Double, Boolean)', function() {
    var res = brep.makeShell(create.Geom.SphericalSurface(), 0, 1, 0, 1, false);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Shell');
  });

  xit('map shapes', function() {
    var ax2 = new gp.Ax3(new gp.Pnt(0, 0, 0), new gp.Dir(0, 1, 0), new gp.Dir(0, 0, 1));
    var plane = new Geom.Plane(ax2);
    var face = brep.makeFace(plane, -1, 1, -1, 1, 0.01);
    var map = brep.TopExp.vertices(face);
    console.log(map)
  })
  xit('map shapes', function() {
    var line = new Geom.Line(new gp.Pnt(0, 0, 0), new gp.Dir(0, 1, 0));
    var edge = brep.makeEdge(line, -1, 1);
    console.log(Object.keys(edge))
    var map = edge.vertices();
    console.log(map)
  })
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


  xit('BezierCurve(Array, Array)', function() {
    var points = [
      new gp.Pnt(1, 2, 3), new gp.Pnt(2, 3, 4),
      new gp.Pnt(3, 4, 5), new gp.Pnt(4, 5, 6)
    ];
    var weights = [1.0, 1.0, 1.0, 1.0, 1.0];
    console.log('BezierCurve(Array)')
    var res = new Geom.BezierCurve(points, weights);
    helpers.expectType(res, 'BezierCurve');
    expect(res.nbPoles()).toBe(4);

  });


});
