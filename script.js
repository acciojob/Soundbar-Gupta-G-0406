const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const btnContainer = document.getElementById('buttons');

// Create sound buttons
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn'); // Requirement: className 'btn'
    
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    btnContainer.appendChild(btn);
});

// Create the stop button specifically
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn');
stopBtn.classList.add('stop'); // Requirement: className 'stop'
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', () => {
    stopSongs();
});

btnContainer.appendChild(stopBtn);

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0; // Rewind to start
    });
}