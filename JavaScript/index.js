import {HandleDisplayProject,removeProjectClicked} from './HandleDisplayProjects.js';
import Handlesizewindow from './Handlesizewindow.js';
import {button_events, display_home} from './HandlebuttonsContents.js';
import musicController from './musicController.js';
import copyToClipboard from './copy_to_clipboard.js';

const home = document.querySelector(".home");
const selector = document.querySelector(".selector ul .selected");



document.addEventListener("DOMContentLoaded", () => {
    //HandlebuttonsContents
    button_events();
    display_home(home);
    // Set null click event for selector
    selector.style.pointerEvents = "none";
    // HandleDisplayProjects
    HandleDisplayProject();
    removeProjectClicked();
    // Handlesizewindow
    Handlesizewindow();
    // Play music
    musicController();
    // Copy to clipboard
    copyToClipboard();
});