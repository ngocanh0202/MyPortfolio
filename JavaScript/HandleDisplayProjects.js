import datas from "./data.js";
import ModelProjectObject from "./ModelProjectObject.js";
import HanldedetailProject from "./HandleDetailProject.js";

var modelProjectObject = new ModelProjectObject(0, 2, datas.length-1);


function HandleDisplayProject(){
    const project_container = document.querySelectorAll(".project-contents .project");
    var project_Headers_array = [];
    datas.forEach((data, index) => {
        let project_item = `
            <img src="${data.image[0]}" width="100%" height="100%" alt="${data.title}">
            <div class="project-title text-main">${data.title}</div>
        `
        project_Headers_array.push(project_item);
    });
    for(let i = 0; i <= modelProjectObject.last_index; i++){
        project_container[i].innerHTML = project_Headers_array[i];
    }
    
    HanldedetailProject(modelProjectObject.last_index);
    handleSwitchProject();

}



function handleSwitchProject(){
    const next = document.querySelector(".project-contents .next");
    const prev = document.querySelector(".project-contents .prev");

    next.addEventListener("click", modelProjectObject.handleButtonNext);
    prev.addEventListener("click", modelProjectObject.handleButtonPrev);
}

function removeProjectClicked(){
    // make remove with animation project-clicked
    document.body.addEventListener("click", (event) => {
        if(event.target.classList.contains("project-clicked")){
            event.target.classList.add("project-clicked-remove");
            setTimeout(() => {
                event.target.remove();
            }, 500);
        }
    });
}





export {HandleDisplayProject,removeProjectClicked,modelProjectObject};