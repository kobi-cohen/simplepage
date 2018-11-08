let in1val="global variable";

fun=()=>{
let in1val="local from function";
return in1val;

}

input1=document.getElementById("in1").value=in1val;
input2=document.getElementById("in2").value=fun();