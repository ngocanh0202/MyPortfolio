import {projectContents,detailProject,removeProjectClicked} from './data_projects.js';
import adjustSelectorwindowSize from './button_media.js';
import {button_events, display_home} from './buttons.js';
import musicController from './musicController.js';
import copyToClipboard from './copy_to_clipboard.js';

const home = document.querySelector(".home");
const selector = document.querySelector(".selector ul .selected");



document.addEventListener("DOMContentLoaded", () => {
    button_events();
    display_home(home);
    selector.style.pointerEvents = "none";
    projectContents();
    detailProject();
    removeProjectClicked();
    adjustSelectorwindowSize();
    musicController();
    copyToClipboard();
});