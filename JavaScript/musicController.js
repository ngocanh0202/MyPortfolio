 function musicController () {
    const container_music = document.querySelector(".icon-music");
    const icon_music = document.querySelector(".icon-music img");
    
    const audio = document.createElement("audio");
    audio.autoplay = true;
    audio.loop = true;

    const source = document.createElement("source");
    source.src = "musics/Fieren.mp3";
    source.type = "audio/mpeg";
    audio.appendChild(source);


    container_music.addEventListener("click", () => {
        if (icon_music.src.endsWith("Icon_checked.png")) {
            audio.play();
            icon_music.src = "Icons/Icon.png";
        } else {
            audio.pause();
            icon_music.src = "Icons/Icon_checked.png";
        }
    });   
}

export default musicController;