module.exports = function(mod) {
  mod.name = 'topo';
  mod.depends('geom');
  mod.depends('geom2d');
  mod.depends('gp');

  mod.include('TopLoc_Datum3D');
  mod.include('TopLoc_Location');
  mod.include('TopAbs_Orientation');
  mod.include('TopAbs_ShapeEnum');
  mod.include('TopoDS_Shape');
  mod.include('TopoDS_Vertex');
  mod.include('TopoDS_Edge');
  mod.include('TopoDS_Wire');
  mod.include('TopoDS_Face');
  mod.include('TopoDS_Shell');
  mod.include('TopoDS_Solid');
  mod.include('TopoDS_CompSolid');
  mod.include('TopoDS_Compound');

  mod.upcast('TopoDS_Shape', 'upcastTopoDS');

  mod.include('BRep_Tool');

  // mod.find('TopoDS_Edge')
  //   .staticAsMember('Brep_Tool::Curve()')

  mod.find('*').include('*');
  mod.include('TopExp');
  mod.find('TopExp').include('MapShapes');

  mod.includeAsStatic('BRepBuilderAPI_MakeEdge(Handle_Geom_*)', 'BRepBuilder', 'Edge');
  mod.includeAsStatic('BRepBuilderAPI_MakeVertex(*)', 'BRepBuilder', 'Vertex');
  mod.includeAsStatic('BRepBuilderAPI_MakeWire(*)', 'BRepBuilder', 'Wire');
  mod.includeAsStatic('BRepBuilderAPI_MakeFace(Handle_Geom_*)', 'BRepBuilder', 'Face');
  mod.includeAsStatic('BRepBuilderAPI_MakeFace(TopoDS_*)', 'BRepBuilder', 'Face');
  mod.includeAsStatic('BRepBuilderAPI_MakeShell(Handle_Geom_*)', 'BRepBuilder', 'Shell');
  mod.includeAsStatic('BRepBuilderAPI_MakeSolid(TopoDS_*)', 'BRepBuilder', 'Solid');
  mod.includeAsStatic('BRepBuilderAPI_Transform(TopoDS_*)', 'BRepBuilder', 'Shape');

  //mod.includeBRepPrim('BRepPrimAPI_MakeBox(*)');
  // mod.includeBRepPrim('BRepPrimAPI_MakeCone(*)');
  // mod.includeBRepPrim('BRepPrimAPI_MakeCylinder(*)');
  // mod.includeBRepPrim('BRepPrimAPI_MakeHalfSpace(*)');

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
    .exclude('Nullify()')
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
