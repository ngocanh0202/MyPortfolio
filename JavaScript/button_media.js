const selector = document.querySelector(".selector");
if (window.innerWidth < 768) {
    selector.classList.remove("selector-display");
    selector.classList.add("selector-hidden");

    button_icon.addEventListener("click", () => {
        if(selector.classList.contains("selector-hidden")){
            selector.classList.remove("selector-hidden");
            selector.classList.add("selector-display");
        }else{
            selector.classList.remove("selector-display");
            selector.classList.add("selector-hidden");
        }
    });
}else{
    selector.classList.remove("selector-hidden");
    selector.classList.add("selector-display");
}