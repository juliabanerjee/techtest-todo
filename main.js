// selecting parts that will be needed

const boxToAddTasks = document.querySelector("#addingtaskbox")

const taskDisplay = document.querySelector("#displayingtasks")

const addButton = document.querySelector("add")



// adding event listener when enter button is pressed
addButton.addEventListener('click', event {
  {
    //array of task to be displayed later
    const taskArr = [];
    //task is saved
    const taskInput = boxToAddTasks.value
    
    taskArr.push(taskInput);

    taskArr.forEach(task => `<div id="displayingtasks">
  <p>${taskArr}</p>
    </div>`)
    
  


    console.log(taskArr)
    return taskArr
    
  }
} )