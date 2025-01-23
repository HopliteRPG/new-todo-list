import { projectDisplayArray } from "..";
import { createAndAppendProject } from "./project-creator-folder/project-creator";
import { appendProjectsToDom } from "./project-creator-folder/project-creator-html";
import { touchHTML } from "../event-listener-code/get-project-id";
import { getProjectHTMLId } from "../event-listener-code/delete-project";

export {projectSubmitFunc}

const contentProjectDiv = document.querySelector(".contentProjectDiv");

function projectSubmitFunc(h1,p){
    createAndAppendProject(h1,p,projectDisplayArray);
    appendProjectsToDom(projectDisplayArray);
    touchHTML(contentProjectDiv,".projectDiv");
    getProjectHTMLId(contentProjectDiv,".deleteProjectButton");
}