import { projectDisplayArray } from "..";
import { createAndAppendProject } from "./project-creator-folder/project-creator";
import { appendProjectsToDom } from "./project-creator-folder/project-creator-html";
import { touchHTML } from "../event-listener-code/get-project-id";

export {projectSubmitFunc}

const contentProjectDiv = document.querySelector(".contentProjectDiv");


function projectSubmitFunc(h1,p){
    createAndAppendProject(h1,p,projectDisplayArray);
    appendProjectsToDom(projectDisplayArray);
    touchHTML(contentProjectDiv,".projectDiv")
}