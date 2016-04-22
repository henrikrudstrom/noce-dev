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

%typemap(in) TopTools_ListOfShape & {
  TopTools_ListOfShape list();
  v8::Handle<v8::Array> array = v8::Handle<v8::Array>::Cast(v);
  int length = obj->Get(v8::String::New("length"))->ToObject()->Uint32Value();
  for(int i = 1; i <= length; i++){
    list.Append(SWIG convert pointer ....)
  }
}

%typemap(out) TopTools_ListOfShape {
  v8::Local<v8::Array> array = v8::Array::New(v8::Isolate::GetCurrent(), $1->Extent());
 	TopTools_ListIteratorOfListOfShape iterator($1);
  int i = 0;
  while(iterator.More())
    array->Set(i, SWIG_NewPointerObj((const TopoDS_Shape*)&(iterator->Value()), SWIGTYPE_p_TopoDS_Shape, SWIG_POINTER_OWN |  0 ));
    iterator.Next();
    i++;
  }

  $result = array;

}
