// date 형식 맞게 만드는 함수
const today = new Date();
const leftPad = (value) => {
    if (value >= 10) {
        return value;
    } else {
        return "0" + value;
    }
};

// 날짜 업데이트 함수

const updateDate = () => {
    let year = today.getFullYear(); // 년도
    let month = leftPad(today.getMonth() + 1); // 월
    let date = leftPad(today.getDate()); // 날짜
    let dateString = year + "." + month + "." + date;
    document.getElementById("today-date").innerHTML = dateString;
};

//날짜 변경
const increaseBtn = document.querySelector(".date-next-button");
const decreaseBtn = document.querySelector(".date-before-button");

// 날짜 증가 함수
const increaseDate = () => {
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const year = today.getFullYear();

    if (month === 12 && date === 31) {
        today.setFullYear(year + 1);
        today.setMonth(0);
        today.setDate(1);
    } else if (month === 2) {
        // 2월인 경우
        const isLeapYear =
            (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        const daysInMonth = isLeapYear ? 29 : 28;

        if (date < daysInMonth) {
            today.setDate(date + 1);
        } else {
            today.setMonth(month);
            today.setDate(1);
        }
    } else if ([4, 6, 9, 11].includes(month)) {
        // 4, 6, 9, 11월인 경우
        if (date < 30) {
            today.setDate(date + 1);
        } else {
            today.setMonth(month, 1);
            today.setDate(1);
        }
    } else {
        // 나머지 달인 경우 (1, 3, 5, 7, 8, 10, 12월)
        if (date < 31) {
            today.setDate(date + 1);
        } else {
            today.setMonth(month, 1);
            today.setDate(1);
        }
    }

    updateDate(today);
};

// 날짜 감소 함수
const decreaseDate = () => {
    const month = today.getMonth() + 1;
    const prevMonth = today.getMonth();
    const date = today.getDate();
    const year = today.getFullYear();

    if (month === 1 && date === 1) {
        today.setFullYear(year - 1);
        today.setMonth(11);
        today.setDate(31);
    } else if (month === 3 && date === 1) {
        // 3월 1일인 경우
        const isLeapYear =
            (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        const daysInPrevMonth = isLeapYear ? 29 : 28;
        today.setMonth(prevMonth - 1);
        today.setDate(daysInPrevMonth);
    } else if (date === 1) {
        // 해당 월의 1일인 경우
        const daysInPrevMonth = [1, 3, 5, 7, 8, 10, 12].includes(prevMonth)
            ? 31
            : 30;
        today.setMonth(prevMonth - 1);
        today.setDate(daysInPrevMonth);
    } else {
        today.setDate(date - 1);
    }
    updateDate(today);
};

updateDate();

// increaseBtn을 클릭했을 때 날짜 증가
increaseBtn.addEventListener("click", () => {
    increaseDate();
});

// decreaseBtn을 클릭했을 때 날짜 감소
decreaseBtn.addEventListener("click", () => {
    decreaseDate();
});

// 초기화 함수
const form = document.querySelector(".todo-form");

const init = () => {
    form.addEventListener("submit", addTodoItem);
    btn.addEventListener("click", displayForm);
};

// 할 일 추가 함수
const addTodoItem = () => {
    event.preventDefault();
    // input에 입력한 value를 선택하여 todoContent에 대입
    const todoContent = document.querySelector(".todo-input").value;
    if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력
const printTodoItem = (text) => {
    const todoItem = document.createElement("li");
    const checkBox = document.createElement("button");
    const todoText = document.createElement("span");
    const todoDel = document.createElement("button");

    // todo 내용
    todoText.innerText = text;
    todoText.className = "todo-item-text";
    todoText.addEventListener("click", toggleTodoToDone);

    //li에 todo check 버튼
    checkBox.className = "todo-check-button";

    // todo 삭제 버튼
    todoDel.innerText = "X";
    todoDel.className = "todo-delete-button";
    todoDel.addEventListener("click", deleteTodoItem);

    // li에 item (span, button) 추가
    todoItem.className = "todo-list-item";
    todoItem.appendChild(checkBox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDel);
    document.querySelector(".todo-list").appendChild(todoItem);

    // input 창 초기화
    document.querySelector(".todo-input").value = "";
};

// 할 일 삭제
const deleteTodoItem = (e) => {
    // 삭제 버튼의 부모 요소까지 삭제해야하므로 부모 요소까지 올라가 선택한 후 삭제
    const target = e.target.parentNode;
    document.querySelector(".todo-list").removeChild(target);
};

// 할 일 -> 끝낸 일 이동
const toggleTodoToDone = (e) => {
    // todo list에서 item 삭제
    deleteTodoItem(e);
    // done list에 item 추가
    printDoneItem(e.target.innerText);
};

// 끝낸 일 출력
const printDoneItem = (text) => {
    const doneItem = document.createElement("li");
    const checkedBox = document.createElement("button");
    const doneText = document.createElement("span");
    const doneDel = document.createElement("button");

    doneText.innerText = text;
    doneText.className = "done-item-text";
    doneText.addEventListener("click", toggleDoneToDo);

    //li에 todo check 버튼
    checkedBox.className = "done-check-button";

    doneDel.innerText = "X";
    doneDel.className = "done-delete-button";
    doneDel.addEventListener("click", deleteDoneItem);

    doneItem.className = "done-list-item";
    doneItem.appendChild(checkedBox);
    doneItem.appendChild(doneText);
    doneItem.appendChild(doneDel);

    document.querySelector(".done-list").appendChild(doneItem);
};

// 끝낸 일 삭제
const deleteDoneItem = (e) => {
    const target = e.target.parentNode;
    document.querySelector(".done-list").removeChild(target);
};

// 끝낸 일 -> 할 일 이동
const toggleDoneToDo = (e) => {
    deleteDoneItem(e);
    printTodoItem(e.target.innerText);
};

const btn = document.querySelector(".popup-button");
const toggle = document.getElementById("popup-toggle");

const displayForm = () => {
    if (form.style.display === "none") {
        form.style.display = "flex";
        toggle.style.backgroundImage = "url('image/Polygon 4.png')";
    } else {
        form.style.display = "none";
        toggle.style.backgroundImage = "url('image/Polygon 3.png')";
    }
};

// 시작 함수
init();
