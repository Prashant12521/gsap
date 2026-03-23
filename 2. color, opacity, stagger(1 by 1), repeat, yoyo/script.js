gsap.from("h1", {
  color: "red",
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
  stagger: 0.5,
});

gsap.to("#box", {
  x: 500,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
});
