%{
#include <TCollection.hxx>
#include <TopTools_ListOfShape.hxx>
#include <TopTools_ListIteratorOfListOfShape.hxx>
#include <TColgp_Array1OfPnt2d.hxx>
#include <gp_Pnt2d.hxx>
class gp_Pnt2d;
%}
%inline {
/*v8::Handle<v8::Value> upcast2TopoDS_Shape(const TopoDS_Shape & shape){
    std::cout << "go!!!!!!!!!!" << std::endl;
    // lookup type
    int type = shape.ShapeType();
    std::cout << "ok" << std::endl;
    switch(type){
      case 7:
        return SWIG_NewPointerObj(new TopoDS_Vertex(TopoDS::Vertex(shape)), SWIGTYPE_p_TopoDS_Vertex, SWIG_POINTER_OWN |  0);
      case 6:
        return SWIG_NewPointerObj(new TopoDS_Edge(TopoDS::Edge(shape)), SWIGTYPE_p_TopoDS_Edge, SWIG_POINTER_OWN |  0);
      case 5:
        return SWIG_NewPointerObj(new TopoDS_Wire(TopoDS::Wire(shape)), SWIGTYPE_p_TopoDS_Wire, SWIG_POINTER_OWN |  0);
      case 4:
        return SWIG_NewPointerObj(new TopoDS_Face(TopoDS::Face(shape)), SWIGTYPE_p_TopoDS_Face, SWIG_POINTER_OWN |  0);
      case 3:
        return SWIG_NewPointerObj(new TopoDS_Shell(TopoDS::Shell(shape)), SWIGTYPE_p_TopoDS_Shell, SWIG_POINTER_OWN |  0);
      case 2:
        return SWIG_NewPointerObj(new TopoDS_Solid(TopoDS::Solid(shape)), SWIGTYPE_p_TopoDS_Solid, SWIG_POINTER_OWN |  0);
      case 1:
        return SWIG_NewPointerObj(new TopoDS_CompSolid(TopoDS::CompSolid(shape)), SWIGTYPE_p_TopoDS_CompSolid, SWIG_POINTER_OWN |  0);
      case 0:
        return SWIG_NewPointerObj(new TopoDS_Compound(TopoDS::Compound(shape)), SWIGTYPE_p_TopoDS_Compound, SWIG_POINTER_OWN |  0);
    }
  }*/
/*
  static v8::Handle<v8::Value> makeFilletTest(const TopoDS_Shape & Shape, const Standard_Real r, const TopoDS_Edge & Edge){
    BRepFilletAPI_MakeFillet* obj = new BRepFilletAPI_MakeFillet(Shape, ChFi3d_Rational);
    obj->Add(r, Edge);
    obj->Build();
    if(!obj->IsDone())
      SWIG_V8_Raise("could not make primitive"); // TODO check error

    void * voidptr = 0;
    //return SWIG_NewPointerObj(SWIG_as_voidptr(new TopoDS_Compound(TopoDS::Compound(obj->Shape()))), SWIGTYPE_p_TopoDS_Compound, SWIG_POINTER_OWN |  0);
    return upcast2TopoDS_Shape(obj->Shape(), voidptr);
  }*/
}
