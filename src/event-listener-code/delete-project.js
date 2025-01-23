export{getProjectHTMLId}
import { projectDisplayArray } from "..";
import { appendProjectsToDom } from "../project-code-folder/project-creator-folder/project-creator-html";


function getProjectHTMLId(dom,targetHTMLClassname){
    let targetHTML = dom.querySelectorAll(targetHTMLClassname);
    targetHTML.forEach(deleteButton => {
        deleteButton.addEventListener("click",event=>{

            let deleteButtonParentDivId = event.currentTarget.parentNode.id;
            
            function getUniqueId(object) { 
                return object.id == deleteButtonParentDivId;
              }
            
            const selectedIndex = projectDisplayArray.findIndex(getUniqueId);

            removeProjectFromArray(projectDisplayArray,selectedIndex);
            appendProjectsToDom(projectDisplayArray);
        });
    });
}

function removeProjectFromArray(array,index){
    array.splice(index,1)
}



