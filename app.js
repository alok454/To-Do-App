const section = document.querySelector("section");
const input = document.querySelector("#input");
const submit = input.nextElementSibling;
const todoList = document.querySelector(".todo-list");

console.log(document.createElement("i"))

submit.addEventListener("click", (e) => {
    let inputText = input.value;
    if(inputText) {
        addTask(inputText);
        input.value = "";
    }
})

function addTask(inputText) {
    const div = document.createElement("div");
    const listItem = document.createElement("span");
    const innerDiv = document.createElement("div")
    const editButton = document.createElement("span");
    const deleteButton = document.createElement("span");

    listItem.textContent = inputText;
    
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    div.appendChild(listItem);
    div.appendChild(innerDiv);

    innerDiv.appendChild(editButton);
    innerDiv.appendChild(deleteButton);

    todoList.appendChild(div);

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    })

    editButton.addEventListener("click", () => {
        input.value = listItem.textContent
        editButton.parentElement.parentElement.remove()
    },false)

    deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.parentElement.remove()
    },false)
}
