%typemap(in, numinputs=0) TopTools_IndexedMapOfShape& {
   $1 = new TopTools_IndexedMapOfShape();
}
%typemap(argout) TopTools_IndexedMapOfShape& {// argoutout
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), $1->Extent());
  for(int i = 1; i <= $1->Extent(); i++){
    std::cout << "index" << i << "buckets" << $1->Extent();
    array->Set(i-1, SWIG_NewPointerObj((const TopoDS_Shape*)&($1->FindKey(i)), SWIGTYPE_p_TopoDS_Shape, SWIG_POINTER_OWN |  0 ));
  }
  $result = array;
}
