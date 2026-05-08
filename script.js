 const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

    const buttonsContainer = document.getElementById("buttons");

    sounds.forEach((sound) => {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.innerText = sound;

      const audio = new Audio(`sounds/${sound}.mp3`);

      button.addEventListener("click", () => {
        stopSongs();
        audio.play();
      });

      buttonsContainer.appendChild(button);
    });

    const stopButton = document.createElement("button");
    stopButton.classList.add("stop");
    stopButton.innerText = "stop";

    stopButton.addEventListener("click", stopSongs);

    buttonsContainer.appendChild(stopButton);

    function stopSongs() {
      sounds.forEach((sound) => {
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.pause();
        audio.currentTime = 0;
      });
    }