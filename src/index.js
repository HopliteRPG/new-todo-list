import "./styles.css";

//project creator code
import { createProject,setAndIncreaseProjectIdCount,appendProjectToArray } from "./project-creator-folder/project-creator";
//project form logic 
import { projectFormLogic } from "./project-form-folder/project-form";

let selectedProjectId = 0;
let projectDisplayArray = [];

//running form logic
projectFormLogic();

let tempProject = createProject("h1Text","pText");
setAndIncreaseProjectIdCount(tempProject);
appendProjectToArray(tempProject,projectDisplayArray);
console.log(projectDisplayArray);

let tempProject2 = createProject("h1Text2","pText2");
setAndIncreaseProjectIdCount(tempProject2);
appendProjectToArray(tempProject2,projectDisplayArray);
console.log(projectDisplayArray);
