const HandleCleanProject = (project, index) => {
    project.classList.add("project-animation-clean");
    project.innerHTML = "";
    setTimeout(() => {
        project.classList.remove("project-animation-clean");
    }, 500); 
}

export default HandleCleanProject;