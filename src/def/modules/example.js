module.exports = function(mod) {
  mod.name = 'example';
  mod.depends('other');
  mod.include('gp_Dir');
  mod.include('gp_Ax2');
  mod.include('gp_Ax3');
  mod.include('gp_Trsf');
  mod.find('*').include('*');
  mod.find('*').exclude('_*');
  mod.camelCase('*::*');
  mod.removePrefix('*');
};
