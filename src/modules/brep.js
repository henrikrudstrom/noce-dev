const camelCase = require('camel-case');
module.exports = function(mod) {
  mod.name = 'brep';
  mod.depends('Geom');
  mod.depends('gp');

  mod.include('TopLoc_Location');
  mod.include('TopAbs_Orientation');
  mod.include('TopoDS_Shape');
  mod.include('TopoDS_Edge');
  mod.include('TopoDS_Vertex');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeEdge(Handle_Geom_*)', 'Edge');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeVertex(*)', 'Vertex');
  mod.find('TopoDS_Shape')
    .rename('Location(TopLoc_Location)', 'SetLocation')
    .rename('Orientation(TopAbs_Orientation)', 'SetOrientation')
  mod.find('*').camelCase('*');
  mod.removePrefix('*');
  mod.find('*').include('*');
  mod.noHandle('*');
  
};
