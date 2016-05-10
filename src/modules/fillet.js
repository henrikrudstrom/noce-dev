module.exports = function(mod) {
  mod.name = 'fillet';
  mod.depends('gp');
  mod.depends('geom');
  mod.depends('geom2d');
  mod.depends('topo');

  mod.include('ChFi3d_FilletShape');
  mod.include('GeomAbs_Shape');
  mod.include('BRepBuilderAPI_Command');
  mod.include('BRepBuilderAPI_MakeShape');
  mod.include('BRepFilletAPI_LocalOperation');
  mod.include('BRepFilletAPI_MakeFillet');
  //mod.include('BRepFilletAPI_MakeChamfer');
  //mod.include('BRepFilletAPI_MakeFillet2d');
  mod.upcast('TopoDS_Shape', 'upcastTopoDS');

  mod.find('*').include('*');

  mod.find('*').defaultArgouts();
  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');
  mod.typemapList('TopTools', 'TopoDS_Shape');
  mod.typemapArray1('TColStd', 'Standard_Real');

  mod.noHandle('*');
};
