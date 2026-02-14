//test to see if linked with html file. it is
console.log("H3110 W0r1d")

//lets link our elements we will want to code

const taskText = document.getElementById('WriteTask');

const taskMake = document.getElementById('CreateTask');

const taskList = document.getElementById('TaskDiv');

console.log(taskText);
console.log(taskMake);
console.log(taskList);

//now for event listeners

function addTask(event){
    // stops from reloading page 
    event.preventDefault();
    // shows us the click worked
    console.log("Button was clicked");
        
}

// link variables to function events

taskMake.addEventListener('click', addTask);

