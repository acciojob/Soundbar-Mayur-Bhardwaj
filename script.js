 // const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

 //    const buttonsContainer = document.getElementById("buttons");

 //    sounds.forEach((sound) => {
 //      const button = document.createElement("button");
 //      button.classList.add("btn");
 //      button.innerText = sound;

 //      const audio = new Audio(`sounds/${sound}.mp3`);

 //      button.addEventListener("click", () => {
 //        stopSongs();
 //        audio.play();
 //      });

 //      buttonsContainer.appendChild(button);
 //    });

 //    const stopButton = document.createElement("button");
 //    stopButton.classList.add("stop");
 //    stopButton.innerText = "stop";

 //    stopButton.addEventListener("click", stopSongs);

 //    buttonsContainer.appendChild(stopButton);

 //    function stopSongs() {
 //      sounds.forEach((sound) => {
 //        const audio = new Audio(`sounds/${sound}.mp3`);
 //        audio.pause();
 //        audio.currentTime = 0;
 //      });
 //    }

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.getElementById("buttons");

const audios = {};

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    audios[sound] = new Audio(`sounds/${sound}.mp3`);

    btn.addEventListener("click", () => {
        stopSongs();
        audios[sound].play();
    });

    buttons.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSongs);

buttons.appendChild(stopBtn);

function stopSongs() {
    sounds.forEach(sound => {
        audios[sound].pause();
        audios[sound].currentTime = 0;
    });
}