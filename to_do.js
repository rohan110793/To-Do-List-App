
let x;
let y;
let t_id;
let parentElement;
let parentElementOne;
let parentElementTwo;
let childElement;
let childElementOne;
let childElementTwo;
let newElement;
let newElementOne;
let newElementTwo;

let arr = [];



function addTask(){

    x = document.getElementById("add-task-field").value;
    arr.push(x);
    y = document.getElementById("add-task-field").value = "";

    parentElement = document.getElementById("checkbox-div");
    newElement = document.createElement("input");
    newElement.setAttribute("type", "checkbox");
    newElement.setAttribute("id", "task-done");
    parentElement.appendChild(newElement);


    for(let i=0;i<arr.length;i++){
        parentElementOne = document.getElementById("task-name-div");
        newElementOne = document.createElement("div");
        newElementOne.setAttribute("id", i);
        parentElementOne.appendChild(newElementOne);

        document.getElementById(i).innerHTML = arr[i];

    }

}