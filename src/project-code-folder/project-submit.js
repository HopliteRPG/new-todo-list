import { projectDisplayArray } from "..";
import { createAndAppendProject } from "./project-creator-folder/project-creator";
import { appendProjectsToDom } from "./project-creator-folder/project-creator-html";

export {projectSubmitFunc}

function projectSubmitFunc(h1,p){
    createAndAppendProject(h1,p,projectDisplayArray);
    appendProjectsToDom(projectDisplayArray);
}