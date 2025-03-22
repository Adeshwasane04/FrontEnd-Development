/* task-2:
Create a page with 2 images and a button when the button is clicked,
swap the attributes of the images.
*/


var selectButton=document.querySelector("button");
var imgSelect1=document.querySelector("#img1");
var imgSelect2=document.querySelector("#img2");

selectButton.addEventListener('click', ()=>
{
   let temp=imgSelect1.src;
   imgSelect1.src=imgSelect2.src;
   imgSelect2.src=temp;
    console.log("Image Swap Sucess");
});
