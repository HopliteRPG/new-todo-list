import { projectDisplayArray } from "..";
import { selectedProjectId } from "../event-listener-code/get-project-id";
import { createTodo } from "./todo-creator-folder/todo-creator";


export {todoSubmitFunc}

function todoSubmitFunc(p){
    createTodo(projectDisplayArray,selectedProjectId,p)
 }
 
