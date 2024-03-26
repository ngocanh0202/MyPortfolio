import handleImageChange from "./HandledisplayImageProject.js";
import datas from "./data.js";

function HandledetailProject(last_index){
    const projects = document.querySelectorAll(".project-contents .project");
    projects.forEach((project, index) => {
        project.onclick = (event) => {
            let li_descriptions = "";
            console.log(last_index-2+index);
            datas[last_index-2+index].description.forEach((description) => {
                if(description.startsWith("GitHub: ")){
                    li_descriptions += `<li><a href="${description.slice(8)}" target="_blank">GitHub</a></li>`;
                }
                else if(description.startsWith("Unity play: ")){
                    li_descriptions += `<li><a href="${description.slice(11)}" target="_blank">Unity play</a></li>`;
                }
                else{
                    li_descriptions += `<li>${description}</li>`;
                }
                
                
            });
            let images = "";
            datas[last_index-2+index].image.forEach((image) => {
                images += `
                    <div class="project-image">
                        <img src="${image}" width="100%" height="100%" alt="${datas[last_index-2+index].title}">
                    </div>
                `;
            });
    
            const projectClicked = document.createElement('div');
            projectClicked.classList.add('project-clicked');
            projectClicked.innerHTML = `
                <div class="project-title text-project">${datas[last_index-2+index].title}</div>
                <div class="project-timeline text-project-sub">${datas[last_index-2+index]["time-line"]}</div>
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
            handleImageChange();
        };
    });
}

export default HandledetailProject;