import { projectDisplayArray } from "..";
import { createAndAppendProject } from "./project-creator-folder/project-creator";

export {projectSubmitFunc}

function projectSubmitFunc(h1,p){
    createAndAppendProject(h1,p,projectDisplayArray)
}