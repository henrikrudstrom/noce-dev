const camelCase = require('camel-case');
module.exports = function(mod) {
  mod.name = 'primitives';
  mod.depends('gp');
  mod.depends('geom');
  mod.depends('topo');

  mod.include('BRepPrim_OneAxis');
  mod.include('BRepPrim_Revolution');
  mod.include('BRepPrim_Cone');

  mod.find('*').include('*');

  mod.includeAsStatic('BRepPrimAPI_MakeCone(*)', 'BRepPrim', 'Cone');

  mod.find('*').defaultArgouts();
  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');
  mod.noHandle('*');
};
