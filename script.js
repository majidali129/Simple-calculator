let button = document.querySelectorAll("button");
let ce = document.getElementById("ce");
let half = document.getElementById("half");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let btns = document.getElementsByClassName("btn");
let output = document.querySelector(".output");

let str = " ";

Array.from(btns).forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            str=eval(str);
            output.innerHTML = str;
    
        }else{
            str = str + e.target.innerHTML;
            output.innerHTML = str;
        } if(e.target.innerHTML=="CE" || e.target.innerHTML=="Clear"){
            str = "";
            output.innerHTML = str;
        }
    })
})




