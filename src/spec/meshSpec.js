const brep = require('../lib/brep.js');
const Geom = require('../lib/Geom.js');
const gp = require('../lib/gp.js');
const mesh = require('../lib/mesh.js');
const expect = require('chai').expect;

function checkMesh(mesh) {
  expect(mesh.triangles.constructor.name).to.equal('Int32Array');
  expect(mesh.vertices.constructor.name).to.equal('Float32Array');
  expect(mesh.normals.constructor.name).to.equal('Float32Array');
  expect(mesh.triangles.length).to.be.above(0);
  expect(mesh.vertices.length).to.equal(mesh.normals.length);
  var maxIndex = Math.max.apply(null, Array.prototype.slice.call(mesh.vertices));
  expect(maxIndex).to.be.below(mesh.vertices.length / 3);
}


describe('mesh', function() {
  it('can tesselate a plane', function() {
    var geom = new Geom.Plane(new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)));
    var face = brep.makeFace(geom, 0, 1, 0, 1, 0.01);
    var res = mesh(face, 5, 20, false);
    
    checkMesh(res);
    expect(res.vertices.length).to.equal(12);
    expect(res.normals.length).to.equal(12);
    expect(res.triangles.length).to.equal(6);
  });
  
  it('can tesselate a Sphere', function() {
    var geom = new Geom.SphericalSurface(
      new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)), 2
    );
    
    var face = brep.makeFace(geom, 0, 3.14, 0, 3.14, 0.01);
    var res = mesh(face, 0.005, 20, false);
    
    checkMesh(res);
  });
  
  it('can tesselate a cylinder', function() {
    var geom = new Geom.CylindricalSurface(
      new gp.Ax3(new gp.Pnt(), new gp.Dir(0, 0, 1), new gp.Dir(1, 0, 0)), 2
    );
    
    var face = brep.makeFace(geom, 0, 3.14, 0, 3.14, 0.01);
    var res = mesh(face, 0.005, 20, false);
    
    checkMesh(res);
  });
});
