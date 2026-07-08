const delaudio = document.createElement("audio");
delaudio.src = "sound/delsound.mp3";

const doneaudio = document.createElement("audio");
doneaudio.src = "sound/donesound.mp3";

const addaudio = document.createElement("audio");
addaudio.src = "sound/addsound.mp3";

const erroraudio = document.createElement("audio");
erroraudio.src = "sound/errorsound.mp3";

const localStoragekey = 'tasksave';

let tasklist = document.getElementById("task-list");
let input = document.getElementById("task-input");

// Carrega a lista salva (usa 'let' para permitir que o .map e o .filter funcionem)
let myTasks = JSON.parse(localStorage.getItem(localStoragekey)) || [];

renderTasks();

function verifyadd() {
    if (input.value.trim() === "" || input.value == null) {
        erroraudio.play();
        alert("insert a task valid name!");
        return;
    }

    addaudio.play();

    const newTask = {
        id: Date.now(),
        name: input.value,
        status: "uncompleted"
    };

    myTasks.push(newTask);
    savetasks();

    renderTasks();
}

function renderTasks() {
    tasklist.innerHTML = "";

    myTasks.forEach(function (task) {
        let newLi = document.createElement("li");
        newLi.innerText = task.name;
        newLi.dataset.id = task.id;
        newLi.dataset.status = task.status;

        if (task.status === "completed") {
            newLi.classList.add("completed-task");
        }

        // Configuração do botão de Concluir
        let btn1 = document.createElement("button");
        btn1.classList.add(task.status === "completed" ? "revert-button" : "done-button");

        btn1.addEventListener("click", function () {
            doneaudio.play();

            myTasks = myTasks.map(t => {
                if (t.id === task.id) {
                    const newStatus = t.status === "uncompleted" ? "completed" : "uncompleted";
                    return { ...t, status: newStatus };
                }
                return t;
            });

            savetasks();
            renderTasks();
        });

        // Configuração do botão de Deletar
        let btn2 = document.createElement("button");
        btn2.classList.add("del-button");
        btn2.addEventListener("click", function () {
            delaudio.play();
            deltask(task.id);
        });

        let btncontainer = document.createElement("div");
        btncontainer.classList.add("btn-container");

        btncontainer.appendChild(btn1);
        btncontainer.appendChild(btn2);
        newLi.appendChild(btncontainer);
        tasklist.appendChild(newLi);
    });

    input.value = "";
    input.focus();

    updatemenu();
}

function savetasks() {
    localStorage.setItem(localStoragekey, JSON.stringify(myTasks));
    updatemenu();
}

function updatemenu() {
    let allTasks = document.querySelectorAll("#task-list li");
    const activeTasks = Array.from(allTasks).filter(task => {
        return task.style.display !== "none";
    });

    if (activeTasks.length === 0) {
        document.getElementById("list-txt").innerText = "Try add a new task";
    } else {
        document.getElementById("list-txt").innerText = "";
    }
}

function deltask(id) {
    myTasks = myTasks.filter(task => task.id !== id);

    savetasks();
    renderTasks();
}

document.getElementById("add-button").addEventListener("click", verifyadd);