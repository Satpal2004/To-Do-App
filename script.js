const addBtn = document.querySelector("#addBtn");
const deltodo = document.getElementById("delete");
const dilogBox = document.querySelector("#dilogBox");
const cancelBtn = document.querySelector("#cancelBtn");
const submitBtn = document.querySelector("#submitBtn");
const todoList = document.querySelector("#todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];


function openDilog() {
    dilogBox.classList.remove("hidden");
    dilogBox.classList.add("flex");
}

function displayTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        todoList.insertAdjacentHTML("beforeend", `
            <div
                class="flex flex-col justify-center h-[50%] 2xl:w-3xl lg:w-2xl md:w-xl sm:w-sm w-52 bg-linear-to-r from-slate-300 to-slate-400 border rounded-lg p-5 box-content">
                <div class="flex items-center">
                    <label for="title" class="text-sm"><strong>Title:</strong></label>
                    <h3 class="text-sm">${todo.title}</h3>
                </div>
                <p class="text-sm">${todo.desc}</p>
                <p class="text-sm"><strong>Note:</strong>${todo.note}</p>
                <div id="btn" class="w-full flex justify-end">
                    <button onclick="deleteTodo(${index})" class="bg-red-500 rounded-lg px-2 py-1 hover:bg-rose-600">Delete</button>
                </div>
            </div>
        `);
    });
}


function addTodo() {
    let titleInput = document.getElementById("title");
    let descInput = document.getElementById("desc");
    let noteInput = document.getElementById("note");

    let title = titleInput.value;
    let desc = descInput.value;
    let note = noteInput.value;

    if (title === '' || desc === ''){
        window.alert("Title and Description cannot be empty...");
    }
    else{

        let todo = { title, desc, note };
        todos.push(todo);
    }

    localStorage.setItem("todos", JSON.stringify(todos));

    displayTodos();
    titleInput.value = "";
    descInput.value = "";
    noteInput.value = "";
    closeDialog();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
}


function closeDialog() {
    dilogBox.classList.add("hidden");
    dilogBox.classList.remove("flex");
}


displayTodos();

addBtn.addEventListener("click", () => {
    openDilog()
}
);

cancelBtn.addEventListener("click", () => {
    closeDialog()
}
);

submitBtn.addEventListener("click",()=>{
    addTodo()
})

deltodo.addEventListener("click", ()=>{
    deleteTodo()
})
