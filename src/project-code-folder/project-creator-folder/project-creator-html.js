  export{appendProjectsToDom}
  import { deleteProject } from "../../event-listener-code/delete-project";

  //Declaring HTML Variables
  const divCreate = document.createElement("div");
  const h1Create = document.createElement("h1");
  const pCreate = document.createElement("p");
  const buttonCreate = document.createElement("button");
  const contentProjectDiv = document.querySelector(".contentProjectDiv");
  
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
  cloneButtonCreate.innerText = "Delete";
  cloneButtonCreate.classList.add("deleteProjectButton");
  div.appendChild(cloneButtonCreate);
  deleteProject(cloneButtonCreate);
}

function setProjectHTMLID(project,id){
  project.setAttribute("id", id)

}

function clearProjectDisplay(){
  contentProjectDiv.innerText = "";
}

function appendProjectsToDom(projectDisplayArray){
    clearProjectDisplay();
    projectDisplayArray.forEach(project => {
        let projectDiv = createDivSection(contentProjectDiv,divCreate,"projectDiv");
        createH1(projectDiv.cloneDivCreate,h1Create,project.h1TextObj,"projectH1");
        createP(projectDiv.cloneDivCreate,pCreate,project.pTextObj,"projectP");
        createButton(projectDiv.cloneDivCreate,buttonCreate);
        setProjectHTMLID(projectDiv.cloneDivCreate,project.id);
        console.log("appended")
    });


}