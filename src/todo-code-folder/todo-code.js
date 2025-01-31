export {createTodoObjectHolder,createTodoObject,allTogether}
 


//Creating the holder for the Todo
function createTodoObjectHolder(){
    let todoIdCounter = 0;
    let subTodoArray = [];
    return {todoIdCounter,subTodoArray}
}

function appendTodoObjectHolderToArray(array,index,createTodoObjectHolder){
    array[index].todoArray.push(createTodoObjectHolder);
    console.log(array);
}

//Creating the Todo
function createTodoObject(id,description){
    let todoId = id;
    let todoDescription = description; 
    let checkedStatus = false;
    return {todoId,todoDescription,checkedStatus}
}



function appendTodoObjectToArray(array,projectIndex,todoIndex,todoObject){
    array[projectIndex].todoArray[todoIndex].subTodoArray.push(todoObject);
    console.log(array);
}

// function appendAndIncreaseId(array,index,todoObject){
//     array[index].todoArray.todoObjectHolder.subTodoArray
//     array[index].todoArray.todoObjectHolder.todoIdCounter
// }


function allTogether(array,projectIndex,todoIndex){
    let tempTodoObjectHolder = createTodoObjectHolder();
    console.log(tempTodoObjectHolder)
    appendTodoObjectHolderToArray(array,projectIndex,tempTodoObjectHolder);


    let tempCreateTodoObject = createTodoObject(0,"sfadasfd");
    appendTodoObjectToArray(array,todoIndex,0,tempCreateTodoObject);
    console.log(array);

}