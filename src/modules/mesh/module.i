// Module mesh
%module(package="OCC") mesh

%include typemaps.i
%include cmalloc.i
%include cpointer.i
%include carrays.i
%include exception.i

%include javascript/v8/std_string.i
%include javascript/v8/std_common.i

%include attribute.i

%include ../common/ExceptionCatcher.i
%include "../brep/headers.i"

%{
#include<Mesh.h>
#include<Util.h>
#include <v8.h>
#include <BRepMesh_IncrementalMesh.hxx>
%}

%import "../brep/module.i"

%typemap(out) v8::Local<v8::Object> {
  $result = $1;
}

%inline {

v8::Local<v8::Object> tesselate(const TopoDS_Face& face, double factor, double angle, bool qualityNormals){
  Mesh* mesher = new Mesh();
  BRepMesh_IncrementalMesh IncrementalMesh(face, factor, Standard_True, angle * 3.14159 / 180.0 , Standard_True);
  int res = mesher->extractFaceMesh(face, qualityNormals);

  v8::Local<v8::Object> vertices = _makeTypedArray(&(mesher->vertices.data()[0].x), (int)mesher->vertices.size()*3);
  v8::Local<v8::Object> normals = _makeTypedArray(&(mesher->normals.data()[0].x), (int)mesher->normals.size()*3);
  v8::Local<v8::Object> triangles = _makeTypedArray(&(mesher->triangles.data()[0].i), (int)mesher->triangles.size()*3);
  v8::Local<v8::Object> edgeindices = _makeTypedArray(&(mesher->edgeindices.data()[0]), (int)mesher->edgeindices.size()*3);
  v8::Local<v8::Object> mesh = SWIGV8_OBJECT_NEW();

  mesh->Set(SWIGV8_STRING_NEW("vertices"), vertices);
  mesh->Set(SWIGV8_STRING_NEW("normals"), normals);
  mesh->Set(SWIGV8_STRING_NEW("triangles"), triangles);
  mesh->Set(SWIGV8_STRING_NEW("edgeindices"), edgeindices);

  return mesh;
}

}
