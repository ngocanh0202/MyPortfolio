import {modelProjectObject} from "./HandleDisplayProjects.js";
import data from "./data.js";

const selector = document.querySelector(".selector");
const button_icon = document.querySelector(".icon-selector");

const adjustSelector = () => {
    if (window.innerWidth <= 1040) {
        selector.classList.remove("selector-display");
        selector.classList.add("selector-hidden");
        modelProjectObject.last_index = 0;
        modelProjectObject.head_index = 0;
        modelProjectObject.resetProject(0,0);
    } else {
        selector.classList.remove("selector-hidden");
        selector.classList.add("selector-display");
        modelProjectObject.head_index = 0;
        modelProjectObject.last_index = 2;
        modelProjectObject.resetProject(0,2);
    }
};

function Handlesizewindow () {
    // init
    adjustSelector();
    // keep track of window size
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


export default Handlesizewindow;