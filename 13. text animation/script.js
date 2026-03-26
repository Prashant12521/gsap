function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  const splittedText = h1Text.split("");

  const halfValue = splittedText.length/2

  let clutter = "";

  splittedText.forEach((ch, idx) => {
    if (idx < halfValue) {
      clutter += `<span class='a'>${ch}</span>`;
    } else {
      clutter += `<span class='b'>${ch}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 50,
  duration: 0.7,
  delay: 0.3,
  opacity: 0,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 50,
  duration: 0.7,
  delay: 0.3,
  opacity: 0,
  stagger: -0.15,
});
