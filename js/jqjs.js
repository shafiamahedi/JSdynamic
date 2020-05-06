gsap.registerPlugin(MotionPathPlugin);


gsap.to(".teja", {
    motionPath: {
      	path: [{x:100,y:-20}, {x:300,y:10} , {x:500,y:100}, {x:750,y:-100}, {x:350,y:-50}, {x:600,y:100},{x:800,y:0}, 
      	{x:window.innerWidth,y:-250}],
      

        curviness:1.25
    },
    transformOrigin: "50% 50%",
    duration: 7,
    ease: "power1.inOut"
});

gsap.to(".divi", {
    motionPath: {
      	path: [{x:100,y:10}, {x:300,y:10} , {x:500,y:100}, {x:750,y:-100}, {x:350,y:-50}, {x:600,y:100},{x:800,y:0}, 
      	{x:window.innerWidth,y:-250}],
      

        curviness:1.25
    },
    transformOrigin: "50% 50%",
    duration: 7,
    ease: "power1.inOut"
});

gsap.to(window, {duration: 4, scrollTo:"section"});









