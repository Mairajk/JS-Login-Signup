//=========================================


let users = [];
let logInUser = {};


// function getAllUsers
(() => {
    let userInStringForm = localStorage.getItem("users");
    let logInUserInStringForm = localStorage.getItem("logInUser");
    users = JSON.parse(userInStringForm) || [];
    logInUser = JSON.parse(logInUserInStringForm) || {};
    console.log("users : ", users);
    console.log("LUsers : ", logInUser);
})();

//===========================================


function move(a) {
    window.location.href = a;
}


(() => {
    let isLogIn = localStorage.getItem("logInUser");
    if (!isLogIn) {

        let alert = document.querySelector(`#alert`);
        console.log("login", isLogIn);
        console.log("yes....");
        move("./login.html");
        alert.innerHTML = "please login first"

    } else {
        console.log("you are already login");
    }
})();

//===========display personal info.

let displayName = document.querySelector(`#displayName`);
let displayEmail = document.querySelector(`#displayEmail`);
let displayGender = document.querySelector(`#displayGender`);

displayName.innerHTML = logInUser.name.toUpperCase();
displayEmail.innerHTML = logInUser.email; //.toUpperCase() ;
displayGender.innerHTML = logInUser.gender.toUpperCase();





let logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("logInUser");

    move("./login.html");
}