// selecting parts that will be needed

const boxToAddTasks = document.querySelector("#addingtaskbox")

const taskDisplay = document.querySelector("#displayingtasks")

const addButton = document.querySelector("#add")

const displayDiv = document.querySelector("#displayingtasks");

const tasks = document.querySelector(".task")

const resetButton = document.querySelector("#resetbutton")


// adding event listener when enter button is pressed
addButton.addEventListener("click", (event) =>{

  // array of task to be displayed later
  let taskArr = [];
    // task is saved
    const taskInput = boxToAddTasks.value
    
    taskArr.push(taskInput);
  
    for(let i = 0; i<taskArr.length; i++){
     displayDiv.innerHTML += taskArr[i]
    }
      

    console.log(taskArr)
    return taskArr
  
});
// unfinished reset button
resetButton.addEventListener("click", (event) =>{

taskArr = [];
displayDiv.innerHTML = taskArr

return taskArr

})

