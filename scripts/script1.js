/* Element by id */ 
let able = document.getElementById("first").innerText;
console.log(able);
let msg;
if(able == "My First Paragraph") {
    msg = "My First change";
}

let beta = document.getElementById("first");
beta.style.color = "darkcyan";
beta.style.fontSize = "20px";

document.getElementById("first").innerText=msg;

// by class name
let you = document.getElementsByClassName('cool');
console.log(you);

// lets change all of the elements with classname cool to a different color
let heads = document.querySelectorAll('.cool');

heads.forEach(delta => {
    delta.style.color = 'orange';
});

// Example by element 
let para = document.querySelectorAll('p');
console.log(para); 

