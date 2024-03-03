import datas from "./data.js";

const project_container = document.querySelector(".project-contents");
var project_Headers = "";
datas.forEach((data, index) => {
    project_Headers += `
        <div class="project" id="${index}">
            <img src="${data.image[0]}" width="100%" height="100%" alt="${data.title}">
            <div class="project-title text-main">${data.title}</div>
        </div>
    `
});
project_container.innerHTML = project_Headers;

const projects = document.querySelectorAll(".project");
projects.forEach((project, index) => {
    project.addEventListener("click", (event) => {

        let li_descriptions = "";
        datas[index].description.forEach((description) => {
            li_descriptions += `<li>${description}</li>`;
        });
        let images = "";
        datas[index].image.forEach((image) => {
            images += `
                <div class="project-image">
                    <img src="${image}" width="100%" height="100%" alt="${datas[index].title}">
                </div>
            `;
        });

        const projectClicked = document.createElement('div');
        projectClicked.classList.add('project-clicked');
        projectClicked.innerHTML = `
            <div class="project-title text-project">${datas[index].title}</div>
            <div class="project-timeline text-project-sub">${datas[index]["time-line"]}</div>
            <div class="project-description text-project-sub">
                <ul>
                    ${li_descriptions}
                </ul>
            </div>
            <div class="project-images">
                ${images}
            </div>
        `;
        document.body.appendChild(projectClicked);
    });
});

// make remove with animation project-clicked
document.body.addEventListener("click", (event) => {
    if(event.target.classList.contains("project-clicked")){
        event.target.classList.add("project-clicked-remove");
        setTimeout(() => {
            event.target.remove();
        }, 500);
    }
});