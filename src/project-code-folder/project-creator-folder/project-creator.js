export{createProject,setAndIncreaseProjectIdCount,appendProjectToArray}

let projectIdCount = 0;

    function createProject(h1Text,pText){
        let h1TextObj = h1Text;
        let pTextObj = pText;
        let id = undefined;
        let todoArray = [];
    
        return{h1TextObj,pTextObj,id,todoArray}
    }
    
    function setAndIncreaseProjectIdCount(project){
        project.id = projectIdCount;
        projectIdCount++;
    }

    function appendProjectToArray(project,projectDisplayArray){
        projectDisplayArray.push(project);
    }



