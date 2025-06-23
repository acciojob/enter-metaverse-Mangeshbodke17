//your JS code here. If required.


let btn=document.querySelector("#enterBtn");


btn.addEventListener("click",()=>{

let p=document.querySelector("#status");

let h1=document.createElement("h1");
h1.innerText="Entered Metaverse";

  p.replaceWith(h1);


})
