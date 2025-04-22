
let x;
let y;
let i=0;
let chk;
let edi;
let del;
let parentElement;
let parentElementOne;
let newElement;

let arr = [];


function addTask(){


    x = document.getElementById("add-task-field").value;
    arr.push(x);
    y = document.getElementById("add-task-field").value = "";

    parentElement = document.getElementById("task-list");
    newElement = document.createElement("li");
    newElement.setAttribute("id", "data"+i);
    parentElement.appendChild(newElement);
    document.getElementById("data"+i).innerHTML = arr[i];

    parentElementOne = document.getElementById("data"+i);

    chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.setAttribute("label", "done");
    parentElementOne.appendChild(chk);

    edi = document.createElement("button");
    edi.setAttribute("type", "button");
    edi.setAttribute("id", "edit"+i);
    edi.setAttribute("onclick", "editTask(this)");
    parentElementOne.appendChild(edi);
    document.getElementById("edit"+i).innerHTML="Edit";

    del = document.createElement("button");
    del.setAttribute("type", "button");
    del.setAttribute("id", "del"+i);
    del.setAttribute("onclick", "deleteTask(this)");
    parentElementOne.appendChild(del);
    document.getElementById("del"+i).innerHTML="Delete";

    i++;

}

function deleteTask(button) {

    const listItem = button.parentElement // Get the parent <li> element
    listItem.remove(); // Remove the <li> from the DOM

}

function editTask(button) {
    const listItem1 = button.parentElement;
    const listItemId = listItem1.getAttribute("id");
    const index = listItemId.replace("data", ""); // Extract task index from ID

    // Check if input already exists (we're in edit mode)
    const existingInput = listItem1.querySelector("input[type='text']");

    if (!existingInput) {
        // Create input field with current text
        const currentText = arr[index];
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;

        // Replace the current text with input field
        listItem1.childNodes[0].textContent = ""; // Clear the text node
        listItem1.insertBefore(input, listItem1.firstChild);

        // Change button text to "Save"
        button.innerText = "Save";
    } else {
        // Save the new value
        const updatedText = existingInput.value;
        arr[index] = updatedText;

        // Replace input with plain text
        listItem1.removeChild(existingInput);
        listItem1.insertBefore(document.createTextNode(updatedText), listItem1.firstChild);

        // Change button text back to "Edit"
        button.innerText = "Edit";
    }
}


