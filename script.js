const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let currentAudio = null;

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.innerText;

    // Stop button
    if (sound === "stop") {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    // Stop previous audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Get existing audio element
    const audio = document.getElementById(sound);
    audio.currentTime = 0;
    audio.play();

    currentAudio = audio;
  });
});
