
var numOfTasks
var tasks = document.getElementById('list').querySelectorAll(".task") //returns an array of tasks in the list
if(tasks.length == 0){
    numOfTasks = 0
} else {
    numOfTasks = tasks.length - 1
}

// if(tasks == undefined){
//     console.log(true);
// }
// x[0].remove(); //This removes a tag from the document.

tally()

function pop(element){
    var tasks = document.getElementById('list').querySelectorAll(".task")
    var taskID = parseInt(element.id)
    console.log(tasks[taskID]);
    tasks[taskID].remove();
    numOfTasks--;
    console.log('task deleted')
    tally()
}

function addToTail(){
    numOfTasks++
    console.log(numOfTasks)
    document.getElementById('list').innerHTML += `<div id="${numOfTasks}" class="task" onclick="pop(this)"><p>New Task${numOfTasks}</p></div>`
    tally()
}

function tally(){
    var tasks = document.getElementById('list').querySelectorAll(".task")
    for(var i = 0; i < tasks.length; i++){
        console.log(tasks[i].attributes[0])
        tasks[i].attributes[0] = `${i}`;
    }
}


//This is how to add a task: document.getElementById('list').innerHTML += '<div class="task"><p>Chill</p></div>';
