import "./styles.css";

//project creator code
import { createProject,setAndIncreaseProjectIdCount,appendProjectToArray } from "./project-code-folder/project-creator-folder/project-creator";

//project html code
import { appendProjectsToDom } from "./project-code-folder/project-creator-folder/project-creator-html";

//project form logic 
import { projectFormLogic } from "./project-code-folder/project-form-folder/project-form";

import {todoObjectHolderCreationAndAppending,createTodo,findIndex} from "./todo-code-folder/todo-creator-folder/todo-creator.js"

import { appendTodosToDom } from "./todo-code-folder/todo-creator-folder/todo-creator-html.js";

import { todoFormLogic } from "./todo-code-folder/todo-form-folder/todo-form.js";

export {projectDisplayArray}

let projectDisplayArray = [];
const contentProjectDiv = document.querySelector(".contentProjectDiv")

//running form logic
projectFormLogic();

//Creating Projects
let tempProject = createProject("h1Text","pText");
setAndIncreaseProjectIdCount(tempProject);
appendProjectToArray(tempProject,projectDisplayArray);

// let tempProject2 = createProject("h1Text2","pText2");
// setAndIncreaseProjectIdCount(tempProject2);
// appendProjectToArray(tempProject2,projectDisplayArray);

//Appending them to Dom
appendProjectsToDom(projectDisplayArray);

//Todo Creation
let testId = 0
todoObjectHolderCreationAndAppending(projectDisplayArray,testId);
createTodo(projectDisplayArray,testId,"test1UsingIndex")
createTodo(projectDisplayArray,testId,"test2UsingIndex")
createTodo(projectDisplayArray,testId,"test3UsingIndex")

// todoObjectHolderCreationAndAppending(projectDisplayArray,1);
// createTodo(projectDisplayArray,1,"test1UsingIndex")
// createTodo(projectDisplayArray,1,"test2UsingIndex")
// createTodo(projectDisplayArray,1,"test3UsingIndex")


//Appending Todos
appendTodosToDom(projectDisplayArray,0);

todoFormLogic();
