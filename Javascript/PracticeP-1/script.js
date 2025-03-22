/* task-1:
create an html page with button. when the button is clicked, change the 
text of the paragraph element.
*/


var paragraph = document.querySelector(".para");
var buttonclick=document.querySelector(".btn");

buttonclick.addEventListener('click', ()=>
{
 
   paragraph.innerHTML="This is the paragraph <span>After.</span>";
   console.log('executed successfully');
   
});

