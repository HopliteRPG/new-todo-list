import "./styles.css";

//project creator code
import { createProject,setAndIncreaseProjectIdCount,appendProjectToArray } from "./project-code-folder/project-creator-folder/project-creator";

//project html code
import { appendProjectsToDom } from "./project-code-folder/project-creator-folder/project-creator-html";

//project form logic 
import { projectFormLogic } from "./project-code-folder/project-form-folder/project-form";

//touchHTML code
import { touchHTML } from "./event-listener-code/get-project-id";

//delete project code
import { deleteProject } from "./event-listener-code/delete-project";

export {projectDisplayArray}

let projectDisplayArray = [];
const contentProjectDiv = document.querySelector(".contentProjectDiv")

//running form logic
projectFormLogic();

//Creating Projects
let tempProject = createProject("h1Text","pText");
setAndIncreaseProjectIdCount(tempProject);
appendProjectToArray(tempProject,projectDisplayArray);
console.log(projectDisplayArray);

let tempProject2 = createProject("h1Text2","pText2");
setAndIncreaseProjectIdCount(tempProject2);
appendProjectToArray(tempProject2,projectDisplayArray);
console.log(projectDisplayArray);

//Appending them to Dom
appendProjectsToDom(projectDisplayArray);

//Gets the project id (Used for something not used in the code right now)
touchHTML(contentProjectDiv,".projectDiv");

//makes the delete buttons able to delete projects
deleteProject(contentProjectDiv,".deleteProjectButton");


