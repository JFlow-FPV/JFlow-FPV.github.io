// Optional: rotate background videos every 45 seconds
const videos = [
  "e3S_4SVbq1U", // DJI Avata 2 Cinematic
  "jfExhZ8AFCE", // Best FPV Shots 2024
  "q-29xUFEOyA"  // 10 Cinematic FPV Moves
];

let current = 0;
const iframe = document.querySelector(".hero-media iframe");

function setVideo(index) {
  const id = videos[index % videos.length];
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}`;
}

setInterval(() => {
  current++;
  setVideo(current);
}, 45000);
