//GSAP:Greensock animation platform 
/*defination:GSAP (GreenSock Animation Platform) is a powerful JavaScript library used for creating 
 high-performance animations in web development. It allows developers to animate various properties of HTML elements,
 CSS, SVG, and more, with precise control over timing, sequencing, and easing. GSAP is known for its speed,
  flexibility, and cross-browser compatibility, making it a popular choice for creating engaging and interactive
 web experiences. It functions as a robust tool for animating anything that 
 JavaScript can access, offering advanced features like timelines, sequencing, and special effects through plugins. 
*/
//gsap.to: for start to end 
//gsap.from: for end to start

var tl=gsap.timeline();  //for one after other parent animation perform through timline
tl.from(".name",{
  y:-50,
  opacity:0,
  duration:.7,
 
  stagger:0.3
});
tl.from(".middle-text",{
    x:-500,
    stagger:0.4,  //for moving single element one by one
    duration:0.8,
    opacity:0
})
tl.from("img",{
  opacity:0,
  rotate:45,
  x:100,
  duration:0.5,
  stagger:.4
})