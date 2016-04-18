#pragma SWIG nowarn=504,325,503

%{
#ifdef WNT
#pragma warning(disable : 4716)
#endif
#include <Standard_Transient.hxx>
#include <MMgt_TShared.hxx>
#include <Handle_Standard_Transient.hxx>
#include <Handle_MMgt_TShared.hxx>
#include <Standard_Real.hxx>
#include <Standard_Integer.hxx>
#include <Standard_Boolean.hxx>
#include <Standard_CString.hxx>
%}
%include CommonIncludes.i
%include ExceptionCatcher.i
/*%include ../common/FunctionTransformers.i*/
%include Operators.i


// TODO: seems wasteful to compile this in for every module...
typedef double Standard_Real;
typedef int Standard_Integer;
typedef bool Standard_Boolean;
typedef char const * Standard_CString;
class Standard_Transient {};
class MMgt_TShared : public Standard_Transient {};
class Handle_Standard_Transient {};
class Handle_MMgt_TShared : public Handle_Standard_Transient {};
