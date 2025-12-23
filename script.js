/***********************
 * GSAP FLOATING (INSTANT & SMOOTH)
 ***********************/
window.addEventListener("load", () => {
  const floats = gsap.utils.toArray(".float");
  const h = window.innerHeight;

  floats.forEach((img, i) => {

    // Start images already inside viewport
    const startY = gsap.utils.random(0, h);
    const speed = gsap.utils.random(30, 38);

    gsap.set(img, {
      y: startY,
      opacity: 1
    });

    // Continuous upward motion (no reset jump)
    gsap.to(img, {
      y: -h - 200,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize(y => parseFloat(y) % (h + 250))
      }
    });

    // Gentle horizontal sway
    gsap.to(img, {
      x: gsap.utils.random(-20, 20),
      duration: gsap.utils.random(4, 6),
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  });
});

/***********************
 * STARS / MEMORIES
 ***********************/
let index = 0;

const memories = [
  {type:"image", src:"images/memory1.jpg", text:"Our first memory ❤"},
  {type:"image", src:"images/memory2.jpg", text:"Every moment with you is special ✨"},
  {type:"image", src:"images/memory3.jpg", text:"This day still makes me smile 💫"},
  {type:"image", src:"images/memory4.jpg", text:"A memory I’ll always keep"},
  {type:"image", src:"images/memory5.jpg", text:"So many laughs 😊"},
  {type:"image", src:"images/memory6.jpg", text:"Pure happiness"},
  {type:"image", src:"images/memory7.jpg", text:"Golden moments"},
  {type:"image", src:"images/memory8.jpg", text:"Unforgettable times"},
  {type:"image", src:"images/memory9.jpg", text:"Best memories"},
  {type:"image", src:"images/memory10.jpg", text:"Forever grateful"},
  {type:"image", src:"images/memory11.jpg", text:"Always us"},
  {type:"image", src:"images/memory12.jpg", text:"More memories coming"},
  {type:"image", src:"images/memory13.jpg", text:"Almost there ❤"},
  {type:"video", src:"videos/memory14.mp4", text:"One last surprise 🎥"}
];

function revealNext() {
  if (index < memories.length) {
    show(memories[index]);
    index++;
  } else {
    document.getElementById("blast").style.display = "block";
  }
}

function show(mem) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("content");

  content.innerHTML =
    mem.type === "image"
      ? `<img src="${mem.src}"><p>${mem.text}</p>`
      : `<video src="${mem.src}" controls autoplay></video><p>${mem.text}</p>`;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
