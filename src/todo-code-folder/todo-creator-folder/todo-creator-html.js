//Declaring HTML Variables
const divCreate = document.createElement("div");
const h1Create = document.createElement("h1");
const pCreate = document.createElement("p");
const buttonCreate = document.createElement("button");
const TodoDiv = document.querySelector(".TodoDiv")
const buttonContentTodoDiv = document.querySelector(".buttonContentTodoDiv");
const contentTodoDiv = document.querySelector(".contentTodoDiv")

function createDivSection(parentDiv,div,className){
  let cloneDivCreate = div.cloneNode(true);
  cloneDivCreate.classList.add(className)
  parentDiv.appendChild(cloneDivCreate);
  return{cloneDivCreate}
}

function createP(div,p,text,className){
  let clonePCreate = p.cloneNode(true);
  clonePCreate.innerText = text;
  clonePCreate.classList.add(className);
  div.appendChild(clonePCreate);
}

function createH1(div,h1,text,className){
  let cloneH1Create = h1.cloneNode(true);
  cloneH1Create.innerText = text;
  cloneH1Create.classList.add(className);
  div.appendChild(cloneH1Create);
}

function createButton(div,button){
let cloneButtonCreate = button.cloneNode(true);
cloneButtonCreate.innerText = "Add Todo";
cloneButtonCreate.classList.add("addTodoButton");
div.appendChild(cloneButtonCreate);
}

function setTodoHTMLID(todo,id){
todo.setAttribute("id", id)

}

function clearTodoDisplay(){
    TodoDiv.innerText = "";
}

// function appendProjectsToDom(projectDisplayArray){
//   clearProjectDisplay();
//   projectDisplayArray.forEach(project => {
//       let projectDiv = createDivSection(contentProjectDiv,divCreate,"projectDiv");
//       let projectContentDiv = createDivSection(projectDiv.cloneDivCreate,divCreate,"projectContentDiv")
//       let deleteDiv = createDivSection(projectDiv.cloneDivCreate,divCreate,"deleteDiv");

//       createH1(projectContentDiv.cloneDivCreate,h1Create,project.h1TextObj,"projectH1");
//       createP(projectContentDiv.cloneDivCreate,pCreate,project.pTextObj,"projectP");
//       createButton(deleteDiv.cloneDivCreate,buttonCreate);
//       setProjectHTMLID(projectContentDiv.cloneDivCreate,project.id);
//       setProjectHTMLID(deleteDiv.cloneDivCreate,project.id);
//       console.log("appended")
//   });
//   touchHTML(contentProjectDiv,".projectContentDiv")

// }