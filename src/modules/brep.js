const camelCase = require('camel-case');
module.exports = function(mod) {
  mod.name = 'brep';
  mod.depends('Geom');
  mod.depends('gp');

  mod.include('TopLoc_Location');
  mod.include('TopAbs_Orientation');
  mod.include('TopoDS_Shape');
  mod.include('TopoDS_Vertex');
  mod.include('TopoDS_Edge');
  mod.include('TopoDS_Wire');
  mod.include('TopoDS_Face');

  mod.find('*').include('*');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeEdge(Handle_Geom_*)', 'Edge');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeVertex(*)', 'Vertex');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeWire(*)', 'Wire');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeFace(Handle_Geom_*)', 'Face');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeFace(TopoDS_*)', 'Face');
  mod.find('TopoDS_Shape')
    .rename('Location(TopLoc_Location)', 'SetLocation')
    .rename('Orientation(TopAbs_Orientation)', 'SetOrientation');

  mod.find('TopoDS_*')
    .exclude((decl) => decl.cls === 'constructor');

  mod.find('TopoDS_Shape')
    .property('Free()', 'Free(Standard_Boolean)')
    .property('Locked()', 'Locked(Standard_Boolean)')
    .property('Modified()', 'Modified(Standard_Boolean)')
    .property('Checked()', 'Checked(Standard_Boolean)')
    .property('Orientable()', 'Orientable(Standard_Boolean)')
    .property('Closed()', 'Closed(Standard_Boolean)')
    .property('Infinite()', 'Infinite(Standard_Boolean)')
    .property('Convex()', 'Convex(Standard_Boolean)')

    .property('Orientation()', 'Orientation(TopAbs_Orientation)')
    .property('Location()', 'Location(TopLoc_Location)');


  mod.find('*').camelCase('*');
  mod.removePrefix('*');

  mod.noHandle('*');
};
