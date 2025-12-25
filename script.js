let index = 0;

/* 14 memories ONLY */
const memories = [
  { type: "image", src: "images/memory1.jpg", text: "Our first photo in school, I thought this photo will be the last photo of ours as i didnt know that our friendship will come this far ❤🫂" },
  { type: "image", src: "images/memory2.jpg", text: "Our First Vidoe Call, Which was filled with full of laughter ✨" },
  { type: "image", src: "images/memory3.jpg", text: "Our Second Vidoe Call, which was quite went in angry mood, with my angry bird 🤭" },
  { type: "image", src: "images/memory4.jpg", text: "The time i met you in your shop. A cute and small talk we had 😁" },
  { type: "image", src: "images/memory5.jpg", text: "Its the day where you burstout with tears as you were facing issues in your relationship, and the smile of yours with trust on me in your eyes that was enough to know how much you trust me 🫂" },
  { type: "image", src: "images/memory6.jpg", text: "The day where I celebrated your birthday for the first time in our friendship!!, I hope the fish i gave you is still alive 🤭" },
  { type: "image", src: "images/memory7.jpg", text: "The day you made by birthday special by being with me and thanks for the hoodie!! ❤" },
  { type: "image", src: "images/memory8.jpg", text: "Last time we both met in Hiriyur in the thought of we might not meet again!!" },
  { type: "image", src: "images/memory9.jpg", text: "But, again. We both met in Bangalore, and still roaming together till now ❤🫂" },
  { type: "image", src: "images/memory10.jpg", text: "Day I celebrated your birthday in the way you wanted. It was nice and emotional also! 🫂" },
  { type: "image", src: "images/memory11.jpg", text: "Medam, the day you told about your 'the best relationship' 😅 " },
  { type: "image", src: "images/memory12.jpg", text: "Last time we offically met eachother before not to meet eachother officially!!" },
  { type: "video", src: "videos/memory14.mp4", text: "For me you are my small cute little girl, see how cute you slept on my shoulder!!" },
  { type: "image", src: "images/memory13.jpg", text: "Last but not the least, I just added this because how you love Aanyaa!!" },
];

function revealNext() {
  /* If memories remain, show them */
  if (index < memories.length) {
    showMemory(memories[index]);
    index++;
  } 
  /* 15th star → birthday blast */
  else {
    showBirthdayBlast();
  }
}

function showMemory(mem) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("content");

  content.innerHTML =
    mem.type === "image"
      ? `<img src="${mem.src}" alt=""><p>${mem.text}</p>`
      : `<video src="${mem.src}" controls autoplay></video><p>${mem.text}</p>`;

  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

/* WOW Birthday Blast */
function showBirthdayBlast() {
  document.getElementById("blast").style.display = "block";
}

