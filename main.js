//Wait for content on the page to Load
window.addEventListener("DOMContentLoaded", () => {
  //Get the counter element
  const counter = document.querySelector(".counter span");
  //Set counter target number to count to 
  const target = 100;
  //Set counter values to zero
  counter.innerText = 0;
  /*Count variable to 
  track the current count*/
  let count = 0;
  //Update count function
  function updateCount() {
    //As Long as the count is below the target number
    if(count < target) {
      //Increment the count
      count++;
      //Set the counter iner text to the count variable
      counter.innerText = count;
      //Repeat this every 15 miliseconds
      setTimeout(updateCount, 15); /*Count Speed*/
      //And when the target is reached
    } else {
      //Set the counter inner text to the target number
      counter.innerText = target;
    }
  }
  //Run the function initially
  updateCount();

  //Create a GSAP timeline
  const tl = gsap.timeline();
  //GSAP ANIMATIONS
  //Animate image and line height
  tl.to(".bg-image", {height: 200, duration: 0.6,});
  tl.to(".line", {width: "1px",height: 200, duration: 0.6,});
  //Animate image width
  tl.to(".bg-image", {width: 200,});
  //Animate image small stretch
  tl.to(".bg-image img", {width: "120%", height: "120%"});
  /*Animate Lines small stretch | "<" - Run animation right
  after the previous animation starts*/
  tl.to(".line-left", {left: "40%", ease: "power3.out"}, "<");
  tl.to(".line-right", {right: "40%", ease: "power3.out"}, "<");
  //Animate image Large stretch (Across the whole screen)
  tl.to(".bg-image", {width: "100%", height: "100%"});
  //Animate lines large stretch
  tl.to(".line-left", {left: "4em", height: "90%"}, "<");
  tl.to(".line-right", {right: "4em", height: "90%"}, "<");
  //Animate title text lines (Add stagger/delay between each line)
  tl.to(".title span", {y: 0, stagger: .2});
  //Animate left and right contnet entering the screen
  tl.from(".content-left", {x: -200});
  tl.from(".content-right", {x: -200});

});