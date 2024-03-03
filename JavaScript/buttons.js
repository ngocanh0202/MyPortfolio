const contents = document.querySelectorAll(".container > div");
const buttons = document.querySelectorAll(".selector > ul li");
const button_icon = document.querySelector(".icon-selector");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      contents.forEach((content) => {
          if(content.classList.contains("display")){
              content.classList.remove("display");
              content.classList.add("hidden");
          }
      });
      contents[index].classList.remove("hidden");
      contents[index].classList.add("display");
      buttons.forEach((button) => {
        if (button.classList.contains("selected")) {
          button.classList.remove("selected");
        }
      });
      button.classList.add("selected");
    });
});


// toggle selector with add class selector-display and selector-hidden
button_icon.addEventListener("click", () => {
    const selector = document.querySelector(".selector");
    if(selector.classList.contains("selector-hidden")){
        selector.classList.remove("selector-hidden");
        selector.classList.add("selector-display");
    }else{
        selector.classList.remove("selector-display");
        selector.classList.add("selector-hidden");
    }
});