export{createProject,appendProjectToArray}

    function createProject(h1Text,pText,id){
        let h1TextObj = h1Text;
        let pTextObj = pText;
        let idObj = id;
        let todoArray = [];
    
        return{h1TextObj,pTextObj,idObj,todoArray}
    }
    
    function appendProjectToArray(project,projectDisplayArray){
        projectDisplayArray.push(project);
    }


