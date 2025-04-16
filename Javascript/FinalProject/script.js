function locomotiveAnimation()
{
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


//loader section
var tl=gsap.timeline();



tl.from("#loader .line h1 ",{
  y:150,
  stagger:0.25,
  duration:0.6,
  delay:0.5
});


tl.from(".line-part1 , .line h2",{
  opacity:0,
  onStart:function(){
    var h5= document.querySelector(".line-part1 h5");
    var count=0;
    
    setInterval(function(){
      
      if(count<100)
      {
        h5.innerHTML=count++;
    
      }
      else{
        h5.innerHTML=count;
      }
    },35);
  
  },
  delay:0.3
});

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3.4
  });

  tl.from(".page1",{
    y:1500,
    duration:1,

  }); 
  tl.to("#loader",{
    display:"none"
  });

function mouseMove()
{
  document.addEventListener("mousemove",function(details){
  gsap.to("#crsr",{
      left:details.x,
      top:details.y
    });
  });


  Shery.makeMagnet(".nav-content2 h4 , .menu-opener__square" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
mouseMove();

tl.from(".navbar",{
  y:-50,
  opacity:0,
  duration:.7,
})
tl.from(".hero h1",{
  y:150,
  stagger:0.25,
  duration:0.6,

});
locomotiveAnimation();
