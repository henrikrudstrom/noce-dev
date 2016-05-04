%{
  #include <TCollection.hxx>
  #include <TCollection_BasicMap.hxx>
#include<TopTools_IndexedMapOfShape.hxx>
#include<TopExp_Explorer.hxx>
#include<TopExp.hxx>
#include <sstream>
#include <string>
#include <iostream>
#include <ostream>
#include <ios>

%}
class TopoDS_Shape;
class TopoDS_Vertex;
class TopoDS_Edge;
class TopoDS_Wire;
class TopoDS_Face;
class TopoDS_Shell;
class TopoDS_Solid;
class TopoDS_CompSolid;
class TopoDS_Compound;

/*static const TopoDS_Shape & myfunc(){
  return new TopoDS_Shape()
}*/
