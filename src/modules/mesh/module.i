// Module Geom
%module(package="OCC") mesh

%include typemaps.i
%include cmalloc.i
%include cpointer.i
%include carrays.i
%include exception.i

%include javascript/v8/std_string.i
%include javascript/v8/std_common.i
//%include javascript/v8/std_list.i
%include javascript/v8/javascripttypemaps.swg
%include attribute.i

%include ../common/ExceptionCatcher.i

//%include ../common/ModuleHeader.i
//%include "headers.i"

// dependencies

%include "../brep/headers.i"
%{

#include<Mesh.h>
#include<Util.h>
#include <v8.h>
%}
%import "../brep/module.i"

%typemap(out) v8::Local<v8::Object> {
  //just return it
  $result = $1;
}

// TODO: https://github.com/erossignon/node-occ/blob/d217ea4f45912fe109ac9ce4cbee8c4527cc8cca/src/Solid.cc
// BRepMesh_IncrementalMesh MSH(shape,factor,Standard_True,angle,Standard_True);

%inline {

v8::Local<v8::Object> tesselate(const TopoDS_Face& face, bool qualityNormals){
  Mesh* obj = new Mesh();
  int res = obj->extractFaceMesh(face, qualityNormals);
  std::cout << "Res is " << res << std::endl;
  std::cout << "vertex count is" << obj->numVertices() << std::endl;
  std::cout << "size is" << obj->vertices.size()*3 << std::endl;
  v8::Handle<v8::Object> output = SWIGV8_OBJECT_NEW();
  //v8::Handle<v8::Array> vertices = v8::Array::New(v8::Isolate::GetCurrent(), obj->numVertices());
  v8::Local<v8::Object> vertices = _makeTypedArray(&(obj->vertices.data()[0].x), (int)obj->vertices.size()*3);
  return vertices;
}

/*v8::Local<v8::Object> UpdateExternalArray(v8::Handle<v8::Object>& pThis, const char* name, const T* data, size_t _length)
{
  v8::Local<v8::Object> arr = _makeTypedArray(data, (int)_length);
  pThis->Set(Nan::New(name).ToLocalChecked(), arr);
}*/

// void Mesh::updateJavaScriptArray()
// {
//   assert(sizeof(triangles[0])==sizeof(int)*3);
//   v8::Local<v8::Object> pThis = NanObjectWrapHandle(this);
//   UpdateExternalArray(pThis, "vertices"    ,&vertices.data()[0].x   ,vertices.size()*3);
//   UpdateExternalArray(pThis, "normals"     ,&normals.data()[0].x    ,normals.size()*3);
//   UpdateExternalArray(pThis, "triangles"   ,&triangles.data()[0].i  ,triangles.size()*3);
//   UpdateExternalArray(pThis, "edgeindices" ,&edgeindices.data()[0]  ,edgeindices.size());
// }
  
}
