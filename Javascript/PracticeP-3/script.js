/* task-:3
create a form with the input field and a submit button use javascript 
to validate the form and display an error message if the input is invaild. 
*/

var formDetail=document.querySelector("form");
var h4=document.querySelector("h4");
var inputs = document.querySelectorAll("input[type='text'], input[type='number']");
 
formDetail.addEventListener("submit", (event)=>
{
   
      event.preventDefault();
     

      //no. 1 way to solve 
/*
    let isEmpty=false;

    inputs.forEach((inps)=>{
        if(inps.value.trim()==='')
        {
            isEmpty=true;
        }
    });

  
    if (isEmpty) {
        h4.textContent = "ERROR, some fields are blank";
        h4.style.color = 'red';
    } else {
        h4.textContent = "Form submitted successfully!";
        h4.style.color = 'green';
    }
        */

    //no.2 way to solve

    for(var i=0;i<inputs.length;i++)
    {
        if(inputs[i].value.trim()==='')
        {
            h4.textContent = "ERROR, some fields are blank"
            h4.style.color = 'red';
            break;
        }
        else{
            h4.textContent = "Form submitted successfully!";
             h4.style.color = 'green';
        }
    }
})