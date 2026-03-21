// gsap.to('#box1', {
//   x:1000,
//   rotate:360,
//   duration:1.5,
//   delay:1
// })

// // duration + delay = total time

// gsap.to('#box2', {
//   x:1000,
//   backgroundColor:'yellow',
//   duration:1.5,
//   delay:2.5
// })

// // box2 delay = box1 total time

// gsap.to('#box3', {
//   x:1000,
//   scale:0.5,
//   borderRadius:'50%',
//   duration: 1.5,
//   delay: 4
// })

// // box3 delay = box2 total time

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1000,
  rotate: 360,
  duration: 1,
  delay: 1,
});

tl.to("#box2", {
  x: 1200,
  duration: 1.5,
});

tl.to("#box3", {
  x: 1300,
  duration: 2,
});
