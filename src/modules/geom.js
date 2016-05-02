module.exports = function(mod) {
  mod.name = 'geom';
  mod.depends('gp');

  mod.include('Geom_Geometry');
  mod.include('Geom_Surface');
  mod.include('Geom_ElementarySurface');
  mod.include('Geom_SphericalSurface');
  mod.include('Geom_CylindricalSurface');
  mod.include('Geom_Plane');
  mod.include('Geom_AxisPlacement');
  mod.include('Geom_Axis1Placement');
  mod.include('Geom_Curve');
  mod.include('Geom_Conic');
  mod.include('Geom_BoundedCurve');
  mod.include('Geom_Circle');
  mod.include('Geom_TrimmedCurve');
  mod.include('Geom_Line');
  mod.include('GeomAbs_Shape');

  mod.include('Geom_BezierCurve');

  mod.find('Geom_BezierCurve').extend({ lengthProperty: 'NbPoles()' });

  mod.find('*')
    .include('*')
    .exclude('DynamicType');
  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');
  mod.noHandle('*');
  mod.find('*').defaultArgouts();
  // TODO: this one causes segfaults
  mod.typemapArray1('TColgp', 'gp_Pnt');
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
  mod.get('Geom_TrimmedCurve').includeGCMake('GC_MakeArcOfCircle(*)');
  mod.get('Geom_TrimmedCurve').includeGCMake('GC_MakeSegment(*)');
  mod.get('Geom_Circle').includeGCMake('GC_MakeCircle(*)');

};
