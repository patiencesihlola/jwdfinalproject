const names = document.querySelector("#name");
const description = document.querySelector("#description");
const assignedTo = document.querySelector("#assigned");
const dueDate = document.querySelector("#date");
const statusD = document.querySelector("#status");
const submitBtn = document.querySelector("#submitBtn")


function formSelect(data) {
    let messages;
names.innerHTML = messages;
}

submitBtn.addEventListener('click',formSelect);