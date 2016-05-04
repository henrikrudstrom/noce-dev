module.exports = function(mod) {
  mod.name = 'geom2d';
  mod.depends('gp');

  mod.include('Geom2d_Geometry');
  mod.include('Geom2d_Curve');
  mod.include('Geom2d_Line');
  mod.include('Geom2d_Conic');
  mod.include('Geom2d_Circle');
  mod.include('Geom2d_Ellipse');
  mod.include('Geom2d_BoundedCurve');
  mod.include('Geom2d_TrimmedCurve');
  mod.include('Geom2d_BezierCurve');
  mod.include('GeomAbs_Shape');

  mod.find('Geom2d_BezierCurve').extend({ lengthProperty: 'NbPoles()' });

  mod.find('*')
    .include('*')
    .exclude('DynamicType');
  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');
  mod.noHandle('*');
  mod.find('*').defaultArgouts();
  // TODO: this one causes segfaults
  mod.typemapArray1('TColgp', 'gp_Pnt2d');
  mod.typemapArray1('TColStd', 'Standard_Real');

  mod.find('*').downCastToThis('Scaled');
  mod.find('*').downCastToThis('Transformed');
  mod.find('*').downCastToThis('Translated');
  mod.find('*').downCastToThis('Rotated');
  mod.find('*').downCastToThis('Mirrored');
  mod.find('*').downCastToThis('Copy');
  mod.find('*').downCastToThis('UReversed');
  mod.find('*').downCastToThis('VReversed');
  mod.find('*').downCastToThis('Reversed');
  mod.get('Geom2d_TrimmedCurve').includeGCMake('GCE2d_MakeArcOfCircle(*)');
  mod.get('Geom2d_TrimmedCurve').includeGCMake('GCE2d_MakeSegment(*)');
  mod.get('Geom2d_Circle').includeGCMake('GCE2d_MakeCircle(*)');
};
