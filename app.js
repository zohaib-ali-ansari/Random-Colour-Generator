let mainheading = document.getElementById("main-heading");
let body = document.querySelector("body");
let btn1 = document.getElementById("btn-1");
let colorCode = document.getElementById("color-code");

function color() {
    let colorGenerator = Math.round(Math.random() * 1000000)
    body.style.backgroundColor = "#" + colorGenerator;
    btn1.style.color = "#" + colorGenerator;
    colorCode.innerText = "#" + colorGenerator
}