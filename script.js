
button=document.getElementById("btn"); //define the button and find him in the document

button.addEventListener("click",  // add Event Listener of "click" to the button
function(){  //function start if the event true
    inputValue=document.getElementById("input1").value; // get the value of the input box "input1"
    alert(check(inputValue))}); // send the value to "check" function with the argument of the value


function check(inputValue){ // function check - checking if the value is "even" or "odd" and return it
    if(inputValue % 2 == 0){ // divied the number at 2 and check the "sheerit"
    return "even";} //if false "even"
    else{
return "odd"; //if true "odd"
}};
