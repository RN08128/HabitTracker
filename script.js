const delaudio = document.createElement("audio");
delaudio.src = "sound/delsound.mp3";

const doneaudio = document.createElement("audio");
doneaudio.src = "sound/donesound.mp3";

const addaudio = document.createElement("audio");
addaudio.src = "sound/addsound.mp3";

const erroraudio = document.createElement("audio");
erroraudio.src = "sound/errorsound.mp3"

let tasklist = document.getElementById("task-list");
let input = document.getElementById("task-input");
const localStoragekey = 'tasksave'

function updatemenu() {
    let allTasks = document.querySelectorAll("#task-list li");
    const activeTasks = Array.from(allTasks).filter(task => {
        return task.style.display !== "none";
    })

    if(activeTasks.length === 0){
        document.getElementById("list-txt").innerText = "Try add a new task";
    } else{
        document.getElementById("list-txt").innerText = "";
    }
}

const savedTasks = JSON.parse(localStorage.getItem(localStoragekey)) || [];
savedTasks.forEach(function (tasktxt) {
    addtask(tasktxt);
});

document.getElementById("add-button").addEventListener("click", verifyadd);


function verifyadd() {
    if (input.value == "" || input.value == null) {
        erroraudio.play();
        alert("insert a task valid name!");
        return;
    }
    addaudio.play();
    addtask(input.value);
}

function savetasks() {
    let tasks = [];
    let allTasks = document.querySelectorAll("#task-list li");
    allTasks.forEach(function (li) {
        tasks.push(li.firstChild.textContent.trim())
    });
    localStorage.setItem(localStoragekey, JSON.stringify(tasks));
    updatemenu();
}

function addtask(tasktxt) {
    let newLi = document.createElement("li");
    newLi.innerText = tasktxt;

    let btn1 = document.createElement("button");
    btn1.classList.add("done-button");
    btn1.addEventListener("click", function () {
        doneaudio.play();
        newLi.classList.add("completed-task");
        btn1.remove();
        savetasks();
        updatemenu();
    })

    let btn2 = document.createElement("button");
    btn2.classList.add("del-button");
    btn2.addEventListener("click", function () {
        delaudio.play();
        newLi.remove();
        savetasks();
        updatemenu();
    })

    let btncontainer = document.createElement("div");
    btncontainer.classList.add("btn-container");

    /*adição dos botões/tasks*/
    btncontainer.appendChild(btn1);
    btncontainer.appendChild(btn2);
    newLi.appendChild(btncontainer);
    tasklist.appendChild(newLi);

    savetasks();

    /*limpar o input e manter o foco do usuário*/
    input.value = "";
    input.focus();
    updatemenu();
}