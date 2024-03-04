const contents = document.querySelectorAll(".container > div");
const buttons = document.querySelectorAll(".selector > ul li");

import {displaySingleWords,tasks} from "./displaySingleWords.js";




function display_home(contents_display) {
  var className = "text-animation";

  var str_home = "Hi, I'm Bui Huynh Ngoc Anh";
  var link_home = ".container .display .title #instructor";

  var str2_home = "I'm a Software Developer";
  var link2_home = ".container .display .title #as";

  var str_about = "About Me";
  var link_about = ".container .display .title #about";

  var str_project = "Projects";
  var link_project = ".container .display .title #projects";

  var str_contact = "Contact me";
  var link_contact = ".container .display .title #contact";

  if (contents_display.classList.contains("display") && contents_display.classList.contains("home")) {
    displaySingleWords(str_home, link_home, className).then(() => {
      displaySingleWords(str2_home, link2_home, className);
    })
  }
  else if (contents_display.classList.contains("display") && contents_display.classList.contains("about")) {
    displaySingleWords(str_about, link_about, className);
  }
  else if (contents_display.classList.contains("display") && contents_display.classList.contains("contact")) {
    displaySingleWords(str_contact, link_contact, className);
  }
  else if (contents_display.classList.contains("display") && contents_display.classList.contains("projects")) {
    displaySingleWords(str_project, link_project, className);
  }
}


function button_events() {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // set display to the selected content
      contents.forEach((content) => {
        if (content.classList.contains("display")) {
          content.classList.remove("display");
          content.classList.add("hidden");
        }
      });
      tasks.forEach((task) => {
        clearTimeout(task);
      });

      // remove all text-animation
      let text_animation = document.querySelectorAll(`.text-animation`);
      text_animation.forEach((element) => {
        element.remove();
      });
      // disable click of html tags
      buttons.forEach((button) => {
        button.style.pointerEvents = "auto";
      });
      button.style.pointerEvents = "none";
      

      // set display to the selected content
      contents[index].classList.remove("hidden");
      contents[index].classList.add("display");
      display_home(contents[index]);

      // set remove selected from all buttons
      buttons.forEach((button) => {
        if (button.classList.contains("selected")) {
          button.classList.remove("selected");
        }
      });
      button.classList.add("selected");
    });
  });
}


export { button_events, display_home };