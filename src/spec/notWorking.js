var notWorking = {
  'gp.Trsf': [
    'transforms(gp.Vec)' //should not be wrapped
  ],
  'Geom.CylindricalSurface': [
    'vperiod()',
    'uiso(Double)', // Works on spherical... segmentation fault
    'transformParameters(Double, Double, gp.Trsf)'
  ],
  'Geom.SphericalSurface': [
    'vperiod()'
  ],
  'Geom.Circle': [
    'makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)'
  ],
  'Geom.TrimmedCurve': [
    'makeArcOfCircle(gp.Pnt, gp.Pnt, gp.Pnt)',
    'setTrim(Double, Double, Boolean)',
    'transformedParameter(Double, gp.Trsf)'
  ],
  'Geom.Line': [
    'period()'
  ],
  'Geom.Plane': [
    'uperiod()', 'vperiod()',
    'transformParameters(Double, Double, gp.Trsf)'
  ],
  'Geom.BezierCurve': [
    'increase(Integer)'
  ],
  'brep.Cone': [
    'startTopEdge()'
  ],
  'brep.OneAxis': [
    'startTopEdge()'
  ],
  'brep.Revolution': [
    'startTopEdge()',
    'setMeridianPcurve(brep.Edge, brep.Face)'
  ]
};

module.exports.notWorking = function(clsName, memberSig) {
  if (clsName in notWorking)
    return notWorking[clsName].find(s => s === memberSig);
  return false;
};

var returnType = {
  'Geom.TrimmedCurve': {
    'basisCurve()': 'Circle',

  },
  'Geom.SphericalSurface': {
    'vperiod()': 'Circle',
    'viso(Double)': 'Circle',
    'uiso(Double)': 'TrimmedCurve'
  },
  'Geom.CylindricalSurface': {
    'viso(Double)': 'Circle'
  },
  'Geom.Plane': {
    'uiso(Double)': 'Line',
    'viso(Double)': 'Line'
  }
};
module.exports.returnType = function(clsName, memberSig) {
  if (clsName in returnType) {
    var sigs = returnType[clsName];
    if (memberSig in sigs) {
      return sigs[memberSig];
    }
  }
  return false;
};
