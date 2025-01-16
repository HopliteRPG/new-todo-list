import "./styles.css";
// import { createProject } from "./project-creator-folder/project-creator";
import { createProject,appendProjectToArray } from "./project-creator-folder/project-creator";

let projectIdCount = 0;
let projectDisplayArray = [];

let tempProject = createProject("h1Text","pText",0)
appendProjectToArray(tempProject,projectDisplayArray)
console.log(projectDisplayArray);

