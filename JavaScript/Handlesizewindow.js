import {modelProjectObject} from "./HandleDisplayProjects.js";
import data from "./data.js";

const selector = document.querySelector(".selector");
const button_icon = document.querySelector(".icon-selector");

const adjustSelector = () => {
    if (window.innerWidth <= 1040) {
        selector.classList.remove("selector-display");
        selector.classList.add("selector-hidden");
        let main_index = (modelProjectObject.head_index + modelProjectObject.last_index) / 2; 
        modelProjectObject.last_index = main_index;
        modelProjectObject.head_index = main_index;
        modelProjectObject.resetProject(main_index,main_index);
    } else {
        selector.classList.remove("selector-hidden");
        selector.classList.add("selector-display");
        let current_index_head = 0
        if(modelProjectObject.head_index >=  data.length - 2){
            current_index_head = modelProjectObject.head_index - 2;
        }
        else{
            current_index_head = modelProjectObject.head_index;
        }
        let current_index_last = current_index_head + 2;
        modelProjectObject.head_index = current_index_head;
        modelProjectObject.last_index = current_index_last;
        modelProjectObject.resetProject(current_index_head,current_index_last);
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