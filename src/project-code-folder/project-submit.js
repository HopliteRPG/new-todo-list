import { createProject,setAndIncreaseProjectIdCount,appendProjectToArray } from "./project-creator-folder/project-creator";
import { projectDisplayArray } from "..";

export {projectSubmitFunc}

function projectSubmitFunc(h1,p){
    let tempProject = createProject(h1,p);
    setAndIncreaseProjectIdCount(tempProject);
    appendProjectToArray(tempProject,projectDisplayArray);
    console.log(projectDisplayArray);
}