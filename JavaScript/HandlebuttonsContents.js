const contents = document.querySelectorAll(".container > div");
const buttons = document.querySelectorAll(".selector > ul li");
import { displaySingleWords, tasks } from "./HandleTitle.js";


const data_single_words = {
  "home": {
    "str_home": "Hi, I'm Bui Huynh Ngoc Anh",
    "str2_home": "I'm a Software Developer",
    "link_home": ".container .display .title #instructor",
    "link2_home": ".container .display .title #as"
  },
  "about": {
    "str_about": "About Me",
    "link_about": ".container .display .title #about"
  },
  "projects": {
    "str_project": "Projects",
    "link_project": ".container .display .title #projects"
  },
  "contact": {
    "str_contact": "Contact me",
    "link_contact": ".container .display .title #contact"
  }
}
var className = "text-animation";





function display_home(contents_display) {

  if (contents_display.classList.contains("display") && contents_display.classList.contains("home")) {
    displaySingleWords(data_single_words.home.str_home,
      data_single_words.home.link_home, className, 75).then(() => {
        displaySingleWords(data_single_words.home.str2_home,
          data_single_words.home.link2_home,
          className, 75);
      })
  }
  else if (contents_display.classList.contains("display") && contents_display.classList.contains("about")) {
    displaySingleWords(data_single_words.about.str_about,
      data_single_words.about.link_about,
      className, 200);
  }
  else if (contents_display.classList.contains("display") && contents_display.classList.contains("contact")) {
    displaySingleWords(data_single_words.contact.str_contact,
      data_single_words.contact.link_contact,
      className, 200);
  }
  else if (contents_display.classList.contains("display") && contents_display.classList.contains("projects")) {
    displaySingleWords(data_single_words.projects.str_project,
      data_single_words.projects.link_project,
      className, 200);
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