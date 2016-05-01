const camelCase = require('camel-case');
module.exports = function(mod) {
  mod.name = 'brep';
  mod.depends('Geom');
  mod.depends('gp');

  mod.include('TopLoc_Location');
  mod.include('TopAbs_Orientation');
  mod.include('TopAbs_ShapeEnum');
  mod.include('TopoDS_Shape');
  mod.include('TopoDS_Vertex');
  mod.include('TopoDS_Edge');
  mod.include('TopoDS_Wire');
  mod.include('TopoDS_Face');
  mod.include('TopoDS_Shell');

  //mod.include('TopExp_Explorer');

  mod.include('BRepPrim_OneAxis');
  mod.include('BRepPrim_Revolution');
  mod.include('BRepPrim_Cone');


  mod.find('*').include('*');
  mod.include('TopExp');
  mod.find('TopExp').include('MapShapes');

  mod.includeBRepBuilder('BRepBuilderAPI_MakeEdge(Handle_Geom_*)', 'Edge');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeVertex(*)', 'Vertex');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeWire(*)', 'Wire');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeFace(Handle_Geom_*)', 'Face');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeFace(TopoDS_*)', 'Face');
  mod.includeBRepBuilder('BRepBuilderAPI_MakeShell(Handle_Geom_*)', 'Shell');

  mod.find('*').exclude('*(*Standard_OStream)');
  mod.find('*').defaultArgouts();

  // mod.find('TopoDS_Edge')
  //   .topoSubShapes('vertices', 'VERTEX');

  mod.typemapList('TopTools', 'TopoDS_Shape');
  mod.typemapIndexedMap('TopTools', 'TopoDS_Shape');
  // mod.find('TopoDS_Wire')
  //   .topoSubShapes('vertices', 'VERTEX')
  // mod.find('TopoDS_Wire')
  //   .topoSubShapes('edges', 'EDGE');

  // mod.find('TopoDS_Face')
  //   .topoSubShapes('vertices', 'VERTEX')
  //   .topoSubShapes('edges', 'EDGE');

  // mod.find('TopoDS_Shell')
  //   .topoSubShapes('vertices', 'VERTEX')
  //   .topoSubShapes('edges', 'EDGE')
  //   .topoSubShapes('faces', 'FACE')
  //   .topoSubShapes('wires', 'WIRE');

  // mod.find('TopoDS_Solid')
  //   .topoSubShapes('vertices', 'VERTEX')
  //   .topoSubShapes('edges', 'EDGE')
  //   .topoSubShapes('faces', 'FACE')
  //   .topoSubShapes('wires', 'WIRE')
  //   .topoSubShapes('shell', 'SHELL');









  mod.find('TopoDS_Shape')
    .rename('Location(TopLoc_Location)', 'SetLocation')
    .rename('Orientation(TopAbs_Orientation)', 'SetOrientation');

  mod.find('TopoDS_*')
    .exclude((decl) => decl.declType === 'constructor');

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


  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');

  mod.noHandle('*');
};
