#pragma once
#include "OCC.h"
#include "NodeV8.h"

#include "Base.h"
#include "Point3Wrap.h"

#include <vector>
class Wire;
class Face:  public Base {

  TopoDS_Face m_face;
  Nan::Persistent<v8::Object> m_cacheMesh;
  virtual ~Face();

public:
  int numWires();
  double area();
  bool fixShape();
  bool isPlanar();
  bool hasMesh();
  std::vector<double> inertia();

  const gp_XYZ centreOfMass() const;

  TEAROFF_POINT(Face,centreOfMass,Point3Wrap,gp_XYZ);

  virtual const TopoDS_Shape& shape() const;
  const  TopoDS_Face& face() const {
    return m_face;
  }
  virtual void setShape(const TopoDS_Shape&);

  bool buildFace(std::vector<Wire*>& wires);

  static NAN_METHOD(extrude);

  virtual v8::Local<v8::Object> Clone() const;

  virtual Base* Unwrap(v8::Local<v8::Object> obj) const {
    return node::ObjectWrap::Unwrap<Face>(obj);
  }
  virtual void InitNew(_NAN_METHOD_ARGS);


  v8::Handle<v8::Object> createMesh(double factor, double angle, bool qualityNormals);

  static void Init(v8::Handle<v8::Object> target);
  static v8::Handle<v8::Object> NewInstance(const TopoDS_Face& face);

  static NAN_METHOD(New);
  static NAN_PROPERTY_GETTER(_mesh);

  static Nan::Persistent<v8::FunctionTemplate> _template;
};