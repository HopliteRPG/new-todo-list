import { updateSelectedProjectId } from "../../event-listener-code/get-project-id";
export{createProject,setAndIncreaseProjectIdCount,appendProjectToArray,createAndAppendProject}

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

    function createAndAppendProject(h1,p,projectDisplayArray){
        let tempProject = createProject(h1,p);
        setAndIncreaseProjectIdCount(tempProject);
        appendProjectToArray(tempProject,projectDisplayArray);
        updateSelectedProjectId(tempProject.id);
        console.log(projectDisplayArray);
    }


