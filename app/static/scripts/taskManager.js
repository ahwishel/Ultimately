function addElement(parentId, elementTag, elementId, className) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('class', className);
    // newElement.innerText = text;
    // newElement.setAttribute('onclick', removeElement(elementId))
    p.appendChild(newElement);
    return newElement;
}
function addElement(parentId, elementTag, elementId, className, text) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('class', className);
    newElement.innerText = text;
    // newElement.setAttribute('onclick', removeElement(elementId))
    p.appendChild(newElement);
    return newElement;
}

function removeElement(elementId) {
    // Removes an element from the document
    // console.log(elementId)
    var element = document.getElementById(elementId);
    console.log('got element')
    element.parentNode.removeChild(element);
    console.log('removed element')
    taskIDNum--;
}

var taskIDNum = 1;

function createTask(curr){
    var idOfDiv = curr.id;
    removeElement(idOfDiv);
    var idOfElement = `task-${taskIDNum}`
    addElement("list", 'input', 'tempIpt', 'task');
    taskIDNum++;
    document.getElementById('tempIpt').setAttribute('type', 'text');
    document.addEventListener('click', function(event){
        if(event.target.id != "tempIpt" && document.getElementById('tempIpt') !== null &&  document.getElementById('tempIpt').value.length != 0){
            console.log(`idOfElement: ${idOfElement}`)
            addElement("list", 'li', idOfElement, 'task', document.getElementById('tempIpt').value)
            removeElement('tempIpt')
            document.getElementById(idOfElement).setAttribute('onclick', `removeElement('${idOfElement}')`)
        }
    })
    //PROBLEM NOW IS NEW DIVS DONT GET AN ONCLICK ATTRIBUTE
    addElement("list", 'li', `task-${taskIDNum}`, 'task', '+');
    document.getElementById(`task-${taskIDNum}`).setAttribute('onclick', 'createTask(this)')

    // if(taskIDNum == 5){
    //     console.log(taskIDNum);
    //     removeElement('task-1');
    // }
}



