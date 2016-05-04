%{
#include <TCollection.hxx>
#include <TCollection_BasicMap.hxx>
#include <TopTools_IndexedMapOfShape.hxx>
#include <TopExp.hxx>
#include <sstream>
#include <string>
#include <iostream>
#include <ostream>
#include <ios>
%}
%inline {
  static v8::Handle<v8::Value> makeWire(const TopAbs_ListOfShapes &edges){
    BRepBuilderAPI_MakeWire * obj = new BRepBuilderAPI_MakeWire();
    obj->Add(edges);
    if(!obj->IsDone())
      SWIG_V8_Raise("could not make brep"); // TODO check error
    return upcastTopoDS_Shape(obj->Shape());
  }
}`;
