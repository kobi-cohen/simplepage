let a=0;
let b=document.getElementById("first");

//click event
b.addEventListener("click",()=>{
    a++;
    
    console.log(`You clicked on the button , this is you push number ${a}`);
    if (a%2==0){
        console.log("and he is zugi");
        
    }
}); 

//Mouse over event

b.addEventListener("mouseover",(event)=>{
    console.log("Mouse was over on the Button")
    event.target.style.color = "orange"; 
    event.target.style.fontSize = "2rem";  
});

//Mouse out event

b.addEventListener("mouseout",(event)=>{
    event.target.style.fontSize = "1rem"; 
    event.target.style.color = "black";   
});
