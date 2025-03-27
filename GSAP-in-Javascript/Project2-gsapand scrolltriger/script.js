gsap.from(".page1 .circle",{
    x:-500 ,
    scale:0,
    rotate:700,
   delay:0.8,   
   duration:2,
  
});
gsap.from(".page2 .circle",{
   
    scale:0,
    rotate:700,
   delay:0.8,   
   duration:2,
    scrollTrigger:{
        trigger:".page2 .circle",
        scroller:"body",
        markers:true,
        color:"black",
        start:"top 60%",
        scrub:true //value for scrub is either true or false or 1to 5 for smooth animation
    }
});