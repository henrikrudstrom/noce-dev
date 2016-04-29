const brep = require('../lib/brep.node');
const Geom = require('../lib/Geom.node');
const gp = require('../lib/gp.node');
const create = require('./create.js')
const helpers = require('./testHelpers.js');

describe('brep', function() {
  it('makeEdge(Geom.Curve)', function() {
    var res = brep.makeEdge(create.Geom.Curve());
    helpers.expectType(res, 'Edge');
  });

  it('makeEdge(Geom.Curve, Double, Double)', function() {
    var res = brep.makeEdge(create.Geom.Curve(), 0.5, 1);
    helpers.expectType(res, 'Edge');
  });

  it('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt)', function() {
    var p1 = new gp.Pnt(0, 0, 0);
    var p2 = new gp.Pnt(5, 0, 0);
    var line = new Geom.Line(p1, new gp.Dir(1, 0, 0));
    var res = brep.makeEdge(line, p1, p2);
    helpers.expectType(res, 'Edge');
  });

  xit('makeEdge(Geom.Curve, brep.Vertex, brep.Vertex)', function() {
    var res = brep.makeEdge(create.Geom.Curve(), create.brep.Vertex(), create.brep.Vertex());
    helpers.expectType(res, 'Edge');
  });

  xit('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt, Double, Double)', function() {
    var p1 = new gp.Pnt(0, 0, 0);
    var p2 = new gp.Pnt(5, 0, 0);
    var line = new Geom.Line(p1, new gp.Dir(1, 0, 0));
    var res = brep.makeEdge(line, p1, p2, 0.2, 0.7);
    helpers.expectType(res, 'Edge');
  });

  xit('makeEdge(Geom.Curve, brep.Vertex, brep.Vertex, Double, Double)', function() {
    var res = brep.makeEdge(create.Geom.Curve(), create.brep.Vertex(), create.brep.Vertex(), 2.5, 3);
    helpers.expectType(res, 'Edge');
  });

  xit('makeWire()', function() {
    var res = brep.makeWire();
    helpers.expectType(res, 'Wire');
  });

  xit('makeWire(brep.Edge, brep.Edge)', function() {
    var res = brep.makeWire(create.brep.Edge(), create.brep.Edge());
    helpers.expectType(res, 'Wire');
  });

  xit('makeWire(brep.Edge, brep.Edge, brep.Edge)', function() {
    var res = brep.makeWire(create.brep.Edge(), create.brep.Edge(), create.brep.Edge());
    helpers.expectType(res, 'Wire');
  });

  xit('makeWire(brep.Edge, brep.Edge, brep.Edge, brep.Edge)', function() {
    var res = brep.makeWire(create.brep.Edge(), create.brep.Edge(), create.brep.Edge(), create.brep.Edge());
    helpers.expectType(res, 'Wire');
  });

  xit('makeWire(brep.Wire, brep.Edge)', function() {
    var res = brep.makeWire(create.brep.Wire(), create.brep.Edge());
    helpers.expectType(res, 'Wire');
  });

  xit('makeFace(brep.Face)', function() {
    var res = brep.makeFace(create.brep.Face());
    helpers.expectType(res, 'Face');
  });

  xit('makeFace(brep.Wire, Boolean)', function() {
    var res = brep.makeFace(create.brep.Wire(), true);
    helpers.expectType(res, 'Face');
  });

  xit('makeShell(Geom.Surface, Boolean)', function() {
    var res = brep.makeShell(create.Geom.SphericalSurface(), false);
    helpers.expectType(res, 'Shell');
  });

  xit('makeShell(Geom.Surface, Double, Double, Double, Double, Boolean)', function() {
    var res = brep.makeShell(create.Geom.SphericalSurface(), 0, 1, 0, 1, false);
    helpers.expectType(res, 'Shell');
  });
});


describe('brep.TopExp', function() {
  xit('mapShapes(brep.Shape, brep.ShapeEnum, Array)', function() {
    // causes segfault atm
    var line = new Geom.Line(new gp.Pnt(0, 0, 0), new gp.Dir(0, 1, 0));
    var edge = brep.makeEdge(line, -1, 1);
    var res = brep.TopExp.mapShapes(edge, 7);
    helpers.expectType(res, 'Array');
  });

  xit('mapShapes(brep.Shape, Array)', function() {
    // causes segfault atm
    var ax2 = new gp.Ax3(new gp.Pnt(0, 0, 0), new gp.Dir(0, 1, 0), new gp.Dir(0, 0, 1));
    var plane = new Geom.Plane(ax2);
    var face = brep.makeFace(plane, -1, 1, -1, 1, 0.01);
    var res = brep.TopExp.mapShapes(face, 7);
    helpers.expectType(res, 'Array');
  });
});
