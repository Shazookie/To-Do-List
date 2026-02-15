//test to see if linked with html file. it is
console.log("H3110 W0r1d")

// links to the elements in html that we will want to code with

const taskText = document.getElementById('WriteTask');

const taskMake = document.getElementById('CreateTask');

const taskList = document.getElementById('TaskDiv');

const empty = document.getElementById('NoTasks');// for the display mesaage when all tasks are removed

let taskCount = 0; //tracker for if emplty. let not const cuz it changes

/* for testing the links worked
console.log(taskText);
console.log(taskMake);
console.log(taskList);
*/



//now for event listeners

function addTask(event){
    // stops from reloading page 
    event.preventDefault();

        // shows us the click worked 
        //console.log("Button was clicked");

    //gets text 
    const newText = taskText.value;

    // doesnt allow empty strings
    if (newText === "")return;

    taskCount++; //incriments when made
    if (taskCount > 0){
        empty.style.display = "none"; // removes text saying all tasks are done
    }


    //These are the elements each item will have

            //COntainer for the items 
        const EachTask = document.createElement('div'); 


            //checkbox
        const CheckBox = document.createElement('input');
        CheckBox.type = "checkbox"; // sets as checkbox
            //task name
        const TaskName = document.createElement('span'); // tracks the 'string'
        TaskName.innerText = newText; //links to our thing grabbing text earlier line 26
            //Delete button
        const DeleteBtn = document.createElement('input');
        DeleteBtn.type = "button"; // sets as button
        DeleteBtn.value = "Delete"; // displays this text on the button

                //link those elements into the container, the div thing
            EachTask.appendChild(CheckBox);
            EachTask.appendChild(TaskName);
            EachTask.appendChild(DeleteBtn);

    
taskList.appendChild(EachTask); //links these to the actual page element 
taskText.value = ""; //Next text element then defaults to being blank
    
            //delte functionality, calls for a listener makes a function for it to just remove the task it is connected to 
        DeleteBtn.addEventListener('click', function(){
            EachTask.remove();
            taskCount--;

                if (taskCount <= 0){
                    empty.style.display = "block"; //displays the text saying tasks are all done
                }
        });

            //Marks completed items with a slash 
        CheckBox.addEventListener('change', function(){
            EachTask.classList.toggle("completed"); // flip flops whther clicked once or twice so just takes on or off, add to the specific text of the task its connected wiht  
        });

    



        // shows us the text popping up in console
        //console.log(newText);
        
}

// link variables to function events

taskMake.addEventListener('click', addTask);


//making the blue print for elements of the to do list 




