const sources = [
    { src: "musics/1.mp3"},
    { src: "musics/2.mp3"},
    { src: "musics/3.mp3"}
];
const container_music = document.querySelector(".icon-music");
const icon_music = document.querySelector(".icon-music img");
const audio = document.createElement("audio");
audio.autoplay = true;
let currentSourceIndex = 0;

function setSource(index) {
    const source = document.createElement("source");
    source.src = sources[index].src;


    while (audio.firstChild) {
        audio.removeChild(audio.firstChild);
    }
    audio.appendChild(source);
    audio.load();
}
setSource(currentSourceIndex);

function musicController() {
  
    audio.addEventListener('ended', function () {
        currentSourceIndex++;
        if (currentSourceIndex >= sources.length) {
            currentSourceIndex = 0; 
        }
        setSource(currentSourceIndex);
    });

   

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






