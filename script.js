document.addEventListener("DOMContentLoaded", () => {

  const sounds = ["applause","boo","gasp","tada","victory","wrong"];
  const container = document.getElementById("buttons");

  let currentSound = null;

  // Create sound buttons
  sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.innerText = sound;
    btn.classList.add("btn");

    btn.addEventListener("click", () => {

      // stop previous
      if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
      }

      currentSound = new Audio(`./sounds/${sound}.mp3`);
      currentSound.play();
    });

    container.appendChild(btn);
  });

  // Create STOP button separately
  const stopBtn = document.createElement("button");
  stopBtn.innerText = "stop";
  stopBtn.classList.add("stop");

  stopBtn.addEventListener("click", () => {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }
  });

  container.appendChild(stopBtn);

});