const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let currentAudio = null;

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.innerText;

    if (sound === "stop") {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });
});
