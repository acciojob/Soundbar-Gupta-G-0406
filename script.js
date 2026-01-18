let currentAudio = null;

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.innerText;

    // Stop audio
    if (sound === "stop") {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.remove();
        currentAudio = null;
      }
      return;
    }

    // Stop previous audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove();
    }

    // Create audio element (IMPORTANT)
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.autoplay = true;

    // Append to DOM so Cypress can detect it
    document.body.appendChild(audio);

    currentAudio = audio;
  });
});
