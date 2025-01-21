export{getProjectHTMLId}
import { projectDisplayArray } from "..";


function getProjectHTMLId(dom,targetHTMLClassname){
    let targetHTML = dom.querySelectorAll(targetHTMLClassname);
    targetHTML.forEach(deleteButton => {
        deleteButton.addEventListener("click",event=>{

            let deleteButtonParentDivId = event.currentTarget.parentNode.id;
            
            function getUniqueId(object) { 
                return object.id == deleteButtonParentDivId;
              }
            
            const selectedIndex = projectDisplayArray.findIndex(getUniqueId)
            alert("Selected Index: " + selectedIndex)




        });
    });
}





