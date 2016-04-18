const camelCase = require('camel-case');
module.exports = function(mod) {
  mod.name = 'brep';
  mod.depends('Geom');
  mod.depends('gp');

  mod.include('TopLoc_Location');
  mod.include('TopAbs_Orientation');
  mod.include('TopoDS_Shape');
  mod.include('TopoDS_Edge');
  mod.find('*').camelCase('*');
  mod.removePrefix('TopoDS_*');
  mod.find('*').include('*');
  mod.noHandle('*');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeEdge(Handle_Geom_*)', 'Edge');
};
