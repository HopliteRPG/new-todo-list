export{deleteProject}
import { projectDisplayArray } from "..";
import { appendProjectsToDom } from "../project-code-folder/project-creator-folder/project-creator-html";


function deleteProject(deleteButton){
        deleteButton.addEventListener("click",event=>{
            let deleteButtonParentDivId = event.currentTarget.parentNode.id;

            
            function getUniqueId(object) { 
                return object.id == deleteButtonParentDivId;
              }
            
            const selectedIndex = projectDisplayArray.findIndex(getUniqueId);

            removeProjectFromArray(projectDisplayArray,selectedIndex);

            console.log(`deleteButtonParentDivId: ${deleteButtonParentDivId}`)
            console.log(projectDisplayArray);

            appendProjectsToDom(projectDisplayArray)

        });
}

function removeProjectFromArray(array,index){
    array.splice(index,1)
}

 
