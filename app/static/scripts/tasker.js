var taskID = 0;
var tasked = false;
function addElement(parentId, elementTag, elementId, className) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('class', className);
    // newElement.innerText = text;
    p.appendChild(newElement);
    return newElement;
}

function removeElement(curr) {
    // console.log('got element')
    curr.parentNode.removeChild(curr);
    // console.log('removed element')
}

function removeElementById(id){
    var element = document.getElementById(id)
    element.parentNode.removeChild(element)
}

function createTask(curr){
    document.addEventListener('click', (event) => {
        if(event.target == curr){
            removeElement(curr)
            var input = addElement("list", "input", 'tempIpt', 'tempInput')
            tasked = false;
        }
    })
}

document.addEventListener('click', (event) => {
    if(event.target.id != 'tempIpt' && tasked == false){
        var input = document.getElementById("tempIpt")
        if(input !== null){
            var value = input.value;
            removeElementById("tempIpt")
            var task = addElement("list", "li", `${taskID++}`, 'task')
            task.setAttribute("onclick", "removeElement(this)")
            task.innerText = value
            tasked = true
        }
    }
})