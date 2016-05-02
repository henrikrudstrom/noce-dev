module.exports = function(mod) {
  mod.name = 'primitives';
  mod.depends('gp');
  mod.depends('geom');
  mod.depends('topo');

  mod.includeBRepPrim('BRepPrimAPI_MakeBox(*)');
  mod.includeBRepPrim('BRepPrimAPI_MakeCone(*)');
  mod.includeBRepPrim('BRepPrimAPI_MakeCylinder(*)');
  mod.includeBRepPrim('BRepPrimAPI_MakeHalfSpace(*)');
  mod.includeBRepPrim('BRepPrimAPI_MakePrism(*)');
  mod.includeBRepPrim('BRepPrimAPI_MakeRevol(*)');
  mod.includeBRepPrim('BRepPrimAPI_MakeSphere(*)');
  mod.includeBRepPrim('BRepPrimAPI_MakeTorus(*)');
  mod.includeBRepPrim('BRepPrimAPI_MakeWedge(*)');


  mod.upcast('TopoDS_Shape', 'upcastTopoDS');

  mod.find('*').defaultArgouts();
  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');
  mod.noHandle('*');
};
