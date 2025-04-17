
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
