gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.5,
});

gsap.from("#box2", {
  y: 1000,
  duration: 2,
  delay: 1,
  rotate: 180,
  backgroundColor: "teal",
  borderRadius: "30px",
  scale:1.5
});
