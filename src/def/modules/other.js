module.exports = function(mod) {
  mod.name = 'other';
  mod.include('Standard_Real');
  mod.include('gp_Pnt');
  mod.include('gp_Vec');
  mod.include('gp_XYZ');
  mod.find('*').include('*');
  mod.find('*').exclude('_*');
  mod.camelCase('*::*');
  mod.removePrefix('*');
};
