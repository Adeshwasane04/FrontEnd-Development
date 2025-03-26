/*
task:5
build a countdown timer that start when the button is click and update 
the display in real time  
*/

let startButton=document.querySelector("#start");
let stopButton=document.querySelector("#stop");
let h2=document.querySelector("h2");
var timer;
let count=0;
startButton.addEventListener("click",()=>
{
     timer=setInterval(()=>{
        h2.textContent=count
        
        count++;
     },1000);
     
})
stopButton.addEventListener("click",()=>
{
   clearInterval(timer);
    
})