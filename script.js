//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{

  const sounds=["applause","boo","gasp","tada","victory",
   "wrong","stop"];

  const container=document.createElement("div");
  container.setAttribute("id","buttons");
  
  let currentSound=null;

  sounds.forEach((sound)=>{
      const btn=document.createElement("button");
      btn.textContent=sound;
      if(sound==="stop"){
           btn.setAttribute("class","stop");
         btn.addEventListener("click",()=>{
            if(currentSound){
	           currentSound.pause();
	           currentSound.currentTime=0;
		   }
		 });    
      }
      else{
        btn.setAttribute("class","btn");

		btn.addEventListener("click", () => {
        // stop previous sound
        if (currentSound) {
          currentSound.pause();
          currentSound.currentTime = 0;
        }

        // play new sound
        currentSound = new Audio(`./sounds/${sound}.mp3`);
        currentSound.play();
      });
	  }
      container.appendChild(btn);
  });
  document.body.appendChild(container);
});