gsap.to(".page2 h1",{
    transform:"translateX(-90%)",    
    delay:1,
   duration:2,
   scrollTrigger:{
        trigger:".page2",
        scroller:"body",
         markers:true,
        start:"top 0",end:"top -100%",
        scrub:2,
        pin:true
   }
})