import HanldedetailProject from "./HandleDetailProject.js";
import HandleCleanProject from "./HandleCleanProject.js";
import datas from "./data.js";
class ModelProjectObject {
    constructor(head_index, last_index, size) {
        this.head_index = head_index;
        this.last_index = last_index;
        this.size = size;
        this.handleButtonNext = this.handleButtonNext.bind(this);
        this.handleButtonPrev = this.handleButtonPrev.bind(this);
    }
    handleButtonNext() {
        console.log(this.head_index, this.last_index);
        if (this.last_index === this.size) {
            return;
        }
        const project_container = document.querySelectorAll(".project-contents .project");
        project_container.forEach(HandleCleanProject);

        for (let i = this.head_index + 1; i <= this.last_index + 1; i++) {
            if (i < datas.length) {
                project_container[i - this.head_index - 1].innerHTML = `
                    <img src="${datas[i].image[0]}" width="100%" height="100%" alt="${datas[i].title}">
                    <div class="project-title text-main">${datas[i].title}</div>
                `;
            }
        }
        this.head_index++;
        this.last_index++;
        if(this.head_index === this.last_index){
            HanldedetailProject(this.last_index+2);
        }
        else{
            HanldedetailProject(this.last_index);
        }
        

    }
    handleButtonPrev() {
        console.log(this.head_index, this.last_index);
        if (this.head_index <= 0) {
            return;
        }
        const project_container = document.querySelectorAll(".project-contents .project");
        project_container.forEach(HandleCleanProject);
        let index = 0
        for (let i = this.head_index - 1; i <= this.last_index - 1; i++) {
            project_container[index].innerHTML = `
                <img src="${datas[i].image[0]}" width="100%" height="100%" alt="${datas[i].title}">
                <div class="project-title text-main">${datas[i].title}</div>
            `;
            index++;
        }
        this.head_index--;
        this.last_index--;
        if(this.head_index === this.last_index){
            HanldedetailProject(this.last_index+2);
        }
        else{
            HanldedetailProject(this.last_index);
        }
    }
    resetProject(head_index, last_index) {
        const project_container = document.querySelectorAll(".project-contents .project");
        var project_Headers_array = [];
        for(let i = head_index; i <= last_index; i++) {
            let project_item = `
            <img src="${datas[i].image[0]}" width="100%" height="100%" alt="${datas.title}">
            <div class="project-title text-main">${datas[i].title}</div>
        `
            project_Headers_array.push(project_item);
        };
        for (let i = 0; i <= 2; i++) {
            project_container[i].innerHTML = project_Headers_array[i];
        }

        if(this.head_index === this.last_index){
            HanldedetailProject(this.last_index+2);
        }
        else{
            HanldedetailProject(this.last_index);
        }
    }
}

export default ModelProjectObject;