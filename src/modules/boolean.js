module.exports = function(mod) {
  mod.name = 'boolean';
  mod.depends('gp');
  mod.depends('geom');
  mod.depends('geom2d');
  mod.depends('topo');

  mod.includeBRepPrim('BRepAlgoAPI_Common(*)', 'Shape');
  mod.includeBRepPrim('BRepAlgoAPI_Cut(*)', 'Shape');
  mod.includeBRepPrim('BRepAlgoAPI_Fuse(*)', 'Shape');
  mod.includeBRepPrim('BRepAlgoAPI_Section(*)', 'Shape');

  mod.upcast('TopoDS_Shape', 'upcastTopoDS');

  mod.find('*').defaultArgouts();
  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');
  //mod.noHandle('*');
};
