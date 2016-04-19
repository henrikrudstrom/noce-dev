module.exports = function(mod) {
  mod.name = 'mesh';
  mod.noSwig = true;
  mod.extraSources = ['Mesh.cc', 'Util.cc', 'GeometryBuilder.cc'];
  mod.extraIncludes = ['<!(node -e "require(\'nan\')")'];
  mod.libraries = [
    'TKernel', 'TKMath', 'TKAdvTools', 'TKG2d', 'TKG3d', 'TKGeomBase',
    'TKBRep', 'TKGeomAlgo', 'TKTopAlgo', 'TKPrim', 'TKBO', 'TKMesh', 'TKXMesh'
  ];
};