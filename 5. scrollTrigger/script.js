gsap.from("#page1 #box", {
  scale: 0.5,
  delay: 1,
  duration: 1,
  opacity: 0,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0.5,
  delay: 1,
  duration: 1,
  opacity: 0,
  rotate: 360,
  scrollTrigger: "#page2 #box",
});
