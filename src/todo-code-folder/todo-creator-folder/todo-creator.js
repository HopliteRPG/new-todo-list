export {todoObjectHolderCreationAndAppending,createTodo,findIndex}
 


//Creating the holder for the Todo
function createTodoObjectHolder(){
    let todoIdCounter = 0;
    let subTodoArray = [];
    return {todoIdCounter,subTodoArray}
}

function appendTodoObjectHolderToArray(array,index,createTodoObjectHolder){
    array[index].todoArray.push(createTodoObjectHolder);
}

//Creating the Todo Object
function createTodoObject(description){
    let todoId;
    let todoDescription = description; 
    let checkedStatus = false;
    return {todoId,todoDescription,checkedStatus}
}


function appendTodoObjectToArray(array,projectIndex,todoIndex,todoObject){
    array[projectIndex].todoArray[todoIndex].subTodoArray.push(todoObject);
}

function appendAndIncreaseId(array,projectIndex,todoIndex){
    let currentTodoIdCounterValue = array[projectIndex].todoArray[todoIndex].todoIdCounter

    let thingToIncrease = array[projectIndex].todoArray[todoIndex].subTodoArray.at(-1);

    thingToIncrease.todoId = currentTodoIdCounterValue;

    array[projectIndex].todoArray[todoIndex].todoIdCounter++;
}

//NOTE MAKE SURE TO MAKE A FIND INDEX FUNCTION TO FIND THE ID IN THE ARRAY

function findIndex(array,projectId){
        function getUniqueId(object) { 
            return object.id == projectId;
          }
        
        const selectedIndex = array.findIndex(getUniqueId);
        return selectedIndex
}


//Export Functions
function todoObjectHolderCreationAndAppending(array,projectId){
    let tempTodoObjectHolder = createTodoObjectHolder();
    console.log(tempTodoObjectHolder)
    let projectIndex = findIndex(array,projectId);
    appendTodoObjectHolderToArray(array,projectIndex,tempTodoObjectHolder);
}

function createTodo(array,projectId,description){
    let projectIndex = findIndex(array,projectId)
    let tempCreateTodoObject = createTodoObject(description);
    appendTodoObjectToArray(array,projectIndex,0,tempCreateTodoObject);
    appendAndIncreaseId(array,projectIndex,0)
    console.log(array);
}

