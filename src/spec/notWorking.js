var notWorking = {
  'gp.Trsf': [
    'transforms(gp.double, gp.double, gp.double)',
    'setValues(gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double, gp.double)'
  ],
  'Geom.CylindricalSurface': [
    'vperiod()',
    'uiso(gp.double)' // Works on spherical... segmentation fault
  ],
  'Geom.SphericalSurface': [
    'vperiod()'
  ],
  'Geom.Circle': [
    'makeCircle(gp.Pnt, gp.Pnt, gp.Pnt)'
  ],
  'Geom.TrimmedCurve': [
    'makeArcOfCircle(gp.Pnt, gp.Pnt, gp.Pnt)'
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
    'viso(gp.double)': 'Circle',
    'uiso(gp.double)': 'TrimmedCurve'
  },
  'Geom.CylindricalSurface': {
    'viso(gp.double)': 'Circle'
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
