export{touchHTML,selectedProjectId,updateSelectedProjectId}

let selectedProjectId = 0;

function touchHTML(dom,targetHTMLClassname){
    let targetHTML = dom.querySelectorAll(targetHTMLClassname);
    targetHTML.forEach(projectHTML => {
        projectHTML.addEventListener("click", event=>{
        let pressedId = event.currentTarget.id;
        selectedProjectId = pressedId;
        console.log(selectedProjectId);
        })
    });

}

function updateSelectedProjectId(newId){
    selectedProjectId = newId
    console.log(selectedProjectId)
}