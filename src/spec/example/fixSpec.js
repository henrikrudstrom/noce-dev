 function() {
  xit('Pnt(gp.Pnt)', function() {
    var res = new gp.Pnt(create.gp.Pnt());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('Pnt');
  });
})

 function() {

  xit('getRotation(gp.XYZ, gp.double)', function() {
    var obj = create.gp.Trsf();
    var res = obj.getRotation(create.gp.XYZ(), 1);
    expect(typeof res).toBe('boolean');
  });

  xit('transforms(gp.double, gp.double, gp.double)', function() {
    var obj = create.gp.Trsf();
    var res = obj.transforms(0.5, 0.5, 0.5);
  });
  xit('setValues(gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double)', function() {
    var obj = create.gp.Trsf();
    var res = obj.setValues(47.5, 48, 48.5, 49, 49.5, 50, 50.5, 51, 51.5, 52, 52.5, 53, 53.5, 54);
  });
});
r;

describe('gp.Ax2', function() {

  it('Ax2(gp.Pnt, gp.Dir, gp.Dir)', function() {
    var res = new gp.Ax2(create.gp.Pnt(), new gp.Dir(0, 1, 0), new gp.Dir(0, 0, 1));
    expect(typeof res).toBe('object');
    expect(res.constructor.name).toBe('Ax2');
  });

})
describe('gp.Ax3', function() {

  it('Ax3(gp.Pnt, gp.Dir, gp.Dir)', function() {
    var res = new gp.Ax3(create.gp.Pnt(), new gp.Dir(0, 1, 0), new gp.Dir(0, 0, 1));
    expect(typeof res).toBe('object');
    expect(res.constructor.name).toBe('Ax3');
  });

})

describe('gp.Cylinder', function() {
  // TODO: implement return values;
  xit('coefficients(gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double)', function() {
    var obj = create.gp.Cylinder();
    var res = obj.coefficients(0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5);
  });
})

e

 function() {
  xit('init(brepTest.Face)', function() {
    var obj = create.brepTest.MakeFace();
    var res = obj.init(create.brepTest.Face());
  });
  xit('MakeFace(brepTest.Face)', function() {
    var res = new brepTest.MakeFace(create.brepTest.Face());
    expect(typeof res).toBe('object');
    expect(res.constructor.name.replace('_exports_', '')).toBe('MakeFace');
  });
})

describe();
