const section = document.querySelector("section");
const input = document.querySelector("#input");
const submit = input.nextElementSibling;
const todoList = document.querySelector(".todo-list");


submit.addEventListener("click", (e) => {
    let inputText = input.value;
    if(inputText) {
        addTask(inputText);
        input.value = "";
    }
})

function addTask(inputText) {
    const taskDiv = document.createElement("div");
    const listItem = document.createElement("span");
    const innerDiv = document.createElement("div")
    const editButton = document.createElement("span");
    const deleteButton = document.createElement("span");

    listItem.textContent = inputText.trim();

    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    taskDiv.appendChild(listItem);
    taskDiv.appendChild(innerDiv);

    innerDiv.appendChild(editButton);
    innerDiv.appendChild(deleteButton);

    todoList.appendChild(taskDiv);

    
    editButton.addEventListener("click", () => {      /* for edit task */
        listItem.classList.add("hide-task");
        editButton.classList.add("hide-edit-sym");

        const editBox = document.createElement("div");
        const saveButton = document.createElement("button");
        const editInput = document.createElement("input");
        
        editInput.value = listItem.textContent;  // add task text into input field
        editBox.classList.add("edit-box")
        editInput.classList.add("edit-input");
        saveButton.classList.add("edit-button");

        saveButton.textContent = "Edit";
        editBox.appendChild(editInput);
        editBox.appendChild(saveButton);
        taskDiv.prepend(editBox);
        editInput.focus();

        saveButton.addEventListener("click", (e) => {      /* for save task after edit */
            if(editInput.value.trim()) {
                listItem.textContent = editInput.value.trim();
                listItem.classList.remove("hide-task");
                editButton.classList.remove("hide-edit-sym");
                editBox.remove();
            }
        }, false)
    }, false)

    deleteButton.addEventListener("click", () => {    /* for delete task */
        deleteButton.parentElement.parentElement.remove();
    }, false)

    listItem.addEventListener("click", () => {       /* for completed task */
        listItem.classList.toggle("completed");
    }, false)
}
