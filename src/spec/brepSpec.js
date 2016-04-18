var brep = require('../lib/brep.node');
var Geom = require('../lib/Geom.node');
var gp = require('../lib/gp.node');
var create = require('./create.js')
describe('brep', function() {


  it('makeEdge(Geom.Curve)', function() {
    console.log('makeEdge(Geom.Curve)')
    var res = brep.makeEdge(create.Geom.Curve());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  it('makeEdge(Geom.Curve, gp.double, gp.double)', function() {
    console.log('makeEdge(Geom.Curve, gp.double, gp.double)')
    var res = brep.makeEdge(create.Geom.Curve(), 0.5, 1);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  it('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt)', function() {
    console.log('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt)')
    var p1 = new gp.Pnt(0, 0, 0);
    var p2 = new gp.Pnt(5, 0, 0);
    var line = new Geom.Line(p1, new gp.Dir(1, 0, 0));
    var res = brep.makeEdge(line, p1, p2);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  xit('makeEdge(Geom.Curve, brep.Vertex, brep.Vertex)', function() {
    console.log('makeEdge(Geom.Curve, brep.Vertex, brep.Vertex)')
    var res = brep.makeEdge(create.Geom.Curve(), create.TopoDS_Vertex(), create.TopoDS_Vertex());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  xit('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt, gp.double, gp.double)', function() {
    console.log('makeEdge(Geom.Curve, gp.Pnt, gp.Pnt, gp.double, gp.double)')
    var p1 = new gp.Pnt(0, 0, 0);
    var p2 = new gp.Pnt(5, 0, 0);
    var line = new Geom.Line(p1, new gp.Dir(1, 0, 0));
    var res = brep.makeEdge(line, p1, p2, 0.2, 0.7);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });


  xit('makeEdge(Geom.Curve, TopoDS_Vertex, TopoDS_Vertex, gp.double, gp.double)', function() {
    console.log('makeEdge(Geom.Curve, TopoDS_Vertex, TopoDS_Vertex, gp.double, gp.double)')
    var res = brep.makeEdge(create.Geom.Curve(), create.TopoDS_Vertex(), create.TopoDS_Vertex(), 2.5, 3);
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Edge');
  });
});
