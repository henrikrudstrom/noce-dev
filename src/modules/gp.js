const camelCase = require('camel-case');
module.exports = function(mod) {
  mod.name = 'gp';
  mod.gpTypemap('gp_XYZ', 'gp_Vec', 'XYZ()');

  mod.include('gp_Pnt');
  mod.include('gp_Vec');
  mod.include('gp_Dir');
  mod.include('gp_Ax1');
  mod.include('gp_Ax2');
  mod.include('gp_Ax3');
  mod.include('gp_Trsf');


  mod.find('*').include('*');
  mod.find('*').exclude('_*');
  mod.find('*')
    .exclude('*Coord')
    .property('X', 'SetX')
    .property('Y', 'SetY')
    .property('Z', 'SetZ');
  mod.rename('')
  mod.get('gp_Trsf')
    .rename('GetRotation(gp_XYZ, Standard_Real)', 'getAxisAngle')
    .argoutObject('GetRotation');


//mod.find('*').defaultArgouts();
  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');

  const trsfs = ['Mirror', 'Rotate', 'Scale', 'Transform', 'Translate', 'Cross', 'CrossCross'];
  trsfs.forEach((trsf) => {
    var self = trsf.replace(/e$/, '') + 'ed';
    mod.find('*')
      .exclude(trsf)
      .rename(self, camelCase(trsf));
  });


};
