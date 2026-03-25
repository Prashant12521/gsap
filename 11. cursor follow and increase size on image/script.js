const main = document.getElementById("main");
const cursor = document.getElementById("cursor");
const imgDiv = document.getElementById("image");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    // ease: "back.out(4)",
  });
});

imgDiv.addEventListener("mouseenter", (e) => {
  cursor.textContent = "View More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff7c",
  });
});

imgDiv.addEventListener("mouseleave", (e) => {
  cursor.textContent = "";

  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
