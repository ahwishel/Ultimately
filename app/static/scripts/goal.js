var goalAdded = false;
// if(goal.length > 0){
//     console.log(goal)
// }

function addGoal(parentId, elementTag, elementId, name, text) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('name', name);
    newElement.innerText = text;
    // newElement.setAttribute('onclick', removeElement(elementId))
    p.appendChild(newElement);
    goalAdded = true;
}

function addInput(parentId, elementTag, elementId, name, text) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('name', name);
    newElement.setAttribute('type', 'text');
    newElement.setAttribute('value', text)
    // newElement.setAttribute('onclick', removeElement(elementId))
    p.appendChild(newElement);
    goalAdded = true;
}


function removeElement(elementId) {
    // Removes an element from the document
    console.log(elementId)
    var element = document.getElementById(elementId);
    console.log('got element')
    element.parentNode.removeChild(element);
    console.log('removed element')
}

document.addEventListener("click", function (event) {
    if (event.target.id !== "goal-field" && !goalAdded) {
        var goal = document.getElementById("goal").elements["ult-goal"].value
        // console.log("clicked not in goal field") -> replace with code to convert it to an h3 element
        addGoal('goal', 'label', 'temp-goal', 'ult-goal', goal)
        removeElement('goal-field')
    } if(event.target.id == "temp-goal" && goalAdded){
        var goal = document.getElementById("temp-goal").innerText
        removeElement('temp-goal')
        addInput('goal', 'input', 'goal-field', 'ult-goal', goal)
        goalAdded = false;
    }
});