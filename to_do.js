
let x;
let y;
let i=0;
let chk;
let edi;
let del;
let parentElement;
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

    chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.setAttribute("label", "done");
    parentElement.appendChild(chk);

    edi = document.createElement("button");
    edi.setAttribute("type", "button");
    edi.setAttribute("id", "edit"+i);
    parentElement.appendChild(edi);
    document.getElementById("edit"+i).innerHTML="Edit";

    del = document.createElement("button");
    del.setAttribute("type", "button");
    del.setAttribute("id", "del"+i);
    parentElement.appendChild(del);
    document.getElementById("del"+i).innerHTML="Delete";


    document.getElementById("data"+i).innerHTML = arr[i];
    i++;


}
