import "./styles.css";
// import { createProject } from "./project-creator-folder/project-creator";
import { createProject,setAndIncreaseProjectIdCount,appendProjectToArray } from "./project-creator-folder/project-creator";

let selectedProjectId = 0;
let projectDisplayArray = [];

let tempProject = createProject("h1Text","pText");
setAndIncreaseProjectIdCount(tempProject);
appendProjectToArray(tempProject,projectDisplayArray);
console.log(projectDisplayArray);

let tempProject2 = createProject("h1Text2","pText2");
setAndIncreaseProjectIdCount(tempProject2);
appendProjectToArray(tempProject2,projectDisplayArray);
console.log(projectDisplayArray);
