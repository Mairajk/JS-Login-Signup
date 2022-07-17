

let email = document.querySelector(`#email`).value
let password = document.querySelector(`#password`).value


let users = [];

function getSignUpUsers() {
    let userInString = localStorage.getItem("users");
    users = JSON.parse(userInString) || [];
    console.log(users);
}

getSignUpUsers();