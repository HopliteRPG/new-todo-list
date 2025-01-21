export{getProjectHTMLId}
function getProjectHTMLId(dom,targetHTMLClassname){
    let targetHTML = dom.querySelectorAll(targetHTMLClassname);
    targetHTML.forEach(deleteButton => {
        deleteButton.addEventListener("click",event=>{
            let deleteButtonParentDivId = event.currentTarget.parentNode;
            console.log(deleteButtonParentDivId)
        });
    });



}