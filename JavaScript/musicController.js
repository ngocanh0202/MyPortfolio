
const container_music = document.querySelector(".icon-music");
const icon_music = document.querySelector(".icon-music img");
const audio = document.querySelector(".icon-music audio");
audio.play();


container_music.addEventListener("click", () => {
    if (icon_music.src.endsWith("Icon_checked.png")) {
        audio.play();
        icon_music.src = "Icons/Icon.png";
    } else {
        audio.pause();
        icon_music.src = "Icons/Icon_checked.png";
    }
});