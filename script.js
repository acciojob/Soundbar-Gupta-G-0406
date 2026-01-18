const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs(); // Stop any currently playing audio
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

// Create the Stop button separately as per instructions
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', () => {
    stopSongs();
});

document.getElementById('buttons').appendChild(stopBtn);

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0; // Reset to the beginning
    });
}