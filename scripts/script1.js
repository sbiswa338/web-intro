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