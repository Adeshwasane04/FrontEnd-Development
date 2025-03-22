/* task-4:
craete a unorderd list allow user to add and remove list items 
dynamically using buttons.
*/

var inputField=document.querySelector("input");

let buttonClick1=document.getElementById("btn1");
let buttonClick2=document.getElementById("btn2");
var h4=document.querySelector("h4");
var Ulist=document.querySelector("ul");

let count=0;

buttonClick1.addEventListener("click",()=>{
 if(inputField.value.trim()!==''){
    h4.textContent="Task added successfully !";
    h4.style.color="green"; 
    let li=document.createElement("li");
    li.textContent=inputField.value;
    li.id="item-"+count;
    count++;
    Ulist.append(li);
    inputField.value="";

    console.log(`Added item with ID: ${li.id}`);
    
    buttonClick2.addEventListener("click",()=>
        {
           Ulist.removeChild(li.id);
        })
        
 }   
 else{
    h4.textContent="Task field is empty !";
    h4.style.color="red";
}


});


