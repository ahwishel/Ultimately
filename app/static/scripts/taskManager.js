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
    console.log(elementId)
    var element = document.getElementById(elementId);
    console.log('got element')
    element.parentNode.removeChild(element);
    console.log('removed element')
    taskIDNum--;
}

var taskIDNum = 1;

function createTask(taskContent){
    var idOfElement = `task-${taskIDNum}`
    addElement("list", 'li', idOfElement, 'task', taskContent);
    taskIDNum++;
    document.getElementById(idOfElement).setAttribute('onclick', `removeElement('${idOfElement}')`)
    // if(taskIDNum == 5){
    //     console.log(taskIDNum);
    //     removeElement('task-1');
    // }
}



