export{touchHTML}

function touchHTML(dom,targetHTMLClassname){
    let targetHTML = dom.querySelectorAll(targetHTMLClassname);
    targetHTML.forEach(projectHTML => {
        projectHTML.addEventListener("click", event=>{
        let pressedId = event.currentTarget.id;
        console.log(pressedId);
        })
    });

}