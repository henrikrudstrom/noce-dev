const camelCase = require('camel-case');
module.exports = function(mod) {
  mod.name = 'Geom';
  mod.depends('gp');

  // mod.include('Standard_Type');
  // mod.include('Handle_Standard_Type');
  mod.include('Geom_Geometry');
  // mod.include('Geom_Surface');
  // mod.include('Geom_ElementarySurface');
  // mod.include('Geom_SphericalSurface');
  // mod.include('Geom_CylindricalSurface');
  // mod.include('Geom_Plane');
  // mod.include('Geom_AxisPlacement');
  // mod.include('Geom_Axis1Placement');
  mod.include('Geom_Curve');
  mod.include('Geom_Conic');
  mod.include('Geom_BoundedCurve');
  mod.include('Geom_Circle');
  mod.include('Geom_TrimmedCurve');
  mod.include('Geom_Line');

  mod.include('Geom_BezierCurve');
  //mod.include('TColgp_Array1OfPnt');


  mod.find('*').include('*');
  mod.find('*').renameCamelCase('*');
  mod.removePrefix('*');
  mod.noHandle('*');
  //mod.find('*').defaultArgouts();
  mod.typemapArray1Of('TColgp_Array1OfPnt', 'Array', 'gp_Pnt');
  mod.typemapArray1Of('TColStd_Array1OfReal', 'Array', 'Standard_Real');

  mod.find('*')
    .argoutObject('Bounds')
    .argoutObject('TransformParameters')
    .argoutObject('Coefficients');
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


  // mod.include('Handle_Geom_Geometry');
  // mod.include('Handle_Geom_Surface');
  // mod.include('Handle_Geom_ElementarySurface');
  // mod.include('Handle_Geom_SphericalSurface');
  // mod.include('Handle_Geom_CylindricalSurface');
  // mod.include('Handle_Geom_AxisPlacement');
  // mod.include('Handle_Geom_Axis1Placement');
  // mod.find('Handle_*').include('*')
};
