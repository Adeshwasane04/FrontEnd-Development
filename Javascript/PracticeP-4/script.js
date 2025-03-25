/* task-4:
craete a unorderd list allow user to add and remove list items 
dynamically using buttons.
*/

var inputField=document.querySelector("input");

let buttonClick1=document.getElementById("btn1");
let buttonClick2=document.getElementById("btn2");
var h4=document.querySelector("h4");
var Ulist=document.querySelector("ul");

let count=1;

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

    //Delete button for every list
    let button=document.createElement("button");
     button.style.width="6vw";
     button.style.marginLeft="2vw";
     button.textContent="delete";
   
     button.style.backgroundColor="red";
    button.addEventListener("click",()=>
   {
    
      Ulist.removeChild(li);
        h4.textContent="Task Delete Sucessfully !"
  
   })
    console.log(`Added item with ID: ${li.id}`);
    
    li.appendChild(button);
        
 }   
 else{
    h4.textContent="Task field is empty !";
    h4.style.color="red";
}


});
buttonClick2.addEventListener("click", () => {
   if (Ulist.children.length > 0) {  // Check if there are items to delete
       Ulist.innerHTML = ""; 
       h4.textContent = "All tasks deleted successfully!";
       h4.style.color = "black";
   } else {
       h4.textContent = "No tasks to delete!";
       h4.style.color = "red"; 
   }
});


