const form = document.querySelector(".todo-form");

const btn = document.querySelector(".popup-button");

const init = () => {
    form.addEventListener("submit", addTodoItem);
    btn.addEventListener("click",displayForm);
};

const displayForm = () => {
    form.style.display === "none"
    ? (form.style.display = "block")
    : (form.style.display = "none");
};

const addTodoItem = () => {
    event.preventDefault();
    const todoContent = document.querySelector(".todo-input").value;
    if (todoContent) printTodoItem(todoContent);
};

const printTodoItem = (text) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDel = document.createElement("button");

    // todo 내용

    todoText.innerText = text;
    todoText.className ="todo-item-text";
    todoText.addEventListener ("click",toggleTodoToDone);


    todoDel.innerText ="삭제";
    todoDel.className ="todo-delete-button";
    todoDel.addEventListener ("click",deleteTodoItem);

    todoItem.className = "todo-list-item";
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDel);
    document.querySelector(".todo-list").appendChild(todoItem);


    document.querySelector(".todo-input").value = "";
};


const deleteTodoItem = (e) => {
    const target = e.target.parentNode;
    document.querySelector(".todo-list").removeChild(target);
};


const toggleTodoToDone = (e) => {
    deleteTodoItem (e);
    printDoneItem(e.target.innerText); // span만 가져오겠다 이런 뜻
};

const printDoneItem = (text) => {


    const doneItem = document.createElement("li");
    const doneText = document.createElement("span");
    const doneDel = document.createElement("button");

    // Donetodo 내용

    doneText.innerText = text;
    doneText.className ="done-item-text";
    doneText.addEventListener ("click",toggleDoneToDo);


    doneDel.innerText ="삭제";
    doneDel.className ="done-delete-button";
    doneDel.addEventListener ("click",deleteDoneItem);

    doneItem.className = "done-list-item";
    doneItem.appendChild(doneText);
    doneItem.appendChild(doneDel);
    document.querySelector(".done-list").appendChild(doneItem);

}; 

const deleteDoneItem = (e) => { //매개변수 넣는 거 까먹지 말기
    const target = e.target.parentNode;
    document.querySelector(".done-list").removeChild(target);
};

const toggleDoneToDo = (e) => {
    deleteDoneItem (e);
    printTodoItem(e.target.innerText); // e만 가지고 오면 html 까지 가져오는 거라 바로 에러
};

//시작 함수
init();