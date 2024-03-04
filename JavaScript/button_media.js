function adjustSelectorwindowSize () {
    const selector = document.querySelector(".selector");
    const button_icon = document.querySelector(".icon-selector");

    const adjustSelector = () => {
        if (window.innerWidth < 768) {
            selector.classList.remove("selector-display");
            selector.classList.add("selector-hidden");
        } else {
            selector.classList.remove("selector-hidden");
            selector.classList.add("selector-display");
        }
    };

    adjustSelector();

    window.addEventListener('resize', adjustSelector);
    

    button_icon.addEventListener("click", () => {
        if(selector.classList.contains("selector-hidden")){
            selector.classList.remove("selector-hidden");
            selector.classList.add("selector-display");
        }else{
            selector.classList.remove("selector-display");
            selector.classList.add("selector-hidden");
        }
    });
}


export default adjustSelectorwindowSize;