/*************************************************
 * GSAP FLOATING — FIX INITIAL SNAP (FINAL)
 *************************************************/
window.addEventListener("load", () => {

  const batch1 = document.querySelectorAll(".f1, .f2, .f3");
  const batch2 = document.querySelectorAll(".f4, .f5, .f6");

  const screenH = window.innerHeight;
  const travel = screenH + 400;
  const startY = screenH + 200;
  const endY = -200;
  const duration = 32;

  // Helper: smooth infinite float without snap
  function floatImage(img, startOffset) {
    // Place image already inside motion path
    gsap.set(img, {
      y: startOffset,
      opacity: 1
    });

    gsap.to(img, {
      y: `-=${travel}`,
      duration: duration,
      ease: "none",
      repeat: -1
    });
  }

  /* ---------- FIRST 3 IMAGES ---------- */
  batch1.forEach((img, i) => {
    const offset = startY - i * 120;
    floatImage(img, offset);
  });

  /* ---------- NEXT 3 IMAGES ---------- */
  batch2.forEach((img, i) => {
    const offset = startY - i * 120 - screenH / 2;
    floatImage(img, offset);
  });
});

/************************
 * MEMORY / STARS LOGIC *
 ************************/
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
