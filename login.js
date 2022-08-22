//===========================================================
// hello = 1245;
// console.log(hello);


(() => {
    let isLogIn = localStorage.getItem("logInUser");
    if (isLogIn) {

        console.log("login", isLogIn);
        console.log("yes....");
        move("./home.html")
    } else {
        console.log("no....");
    }
})()


let users = [];
let logInUser = {};


function move(a) {
    window.location.href = a;
}


(() => {
    let userInStringForm = localStorage.getItem("users");
    let logInUserInStringForm = localStorage.getItem("logInUser");
    users = JSON.parse(userInStringForm) || [];
    logInUsers = JSON.parse(logInUserInStringForm) || {};
    console.log("users : ", users);
    console.log("LUsers : ", logInUser);
})();


let logIn = (e) => {
    e.preventDefault();

    let LogInEmail = document.querySelector(`#lEmail`).value;
    let LogInPassword = document.querySelector(`#lPassword`).value;

    let isRegistered = false;

    for (let i = 0; i < users.length; i++) {
        if (LogInEmail === users[i].email) {

            isRegistered = true;

            if (LogInPassword === users[i].password) {

                localStorage.setItem("logInUser", JSON.stringify(users[i]));

                move("./home.html");

            } else {

                document.querySelector(`#alert`).innerHTML = "Your Passwrod is Incorrect";
                document.querySelector(`#alert`).style.visibility = "visible";

            }
        }

        if (isRegistered !== true) {
            // setInterval(() => {

            document.querySelector(`#alert`).innerHTML = "Your Email is Incorrect"
            document.querySelector(`#alert`).style.visibility = "visible";
            // }, 500);
            // clearInterval()

        }
        isRegistered = false;
        //  else {
        //     // setInterval(() => {
        //     document.querySelector(`#alert`).innerHTML = "Your Email is Incorrect"
        //     document.querySelector(`#alert`).style.visibility = "visible";
        //     // }, 500);clearInterval()
        // }
    }
}





//=================================================================================================

// let email = document.querySelector(`#email`).value
// let password = document.querySelector(`#password`).value


// let users = [];

// function getSignUpUsers() {
//     let userInString = localStorage.getItem("users");
//     users = JSON.parse(userInString) || [];
//     console.log(users);
// }

// getSignUpUsers();


// for (let i = 0; i < users.length; i++) {
//     if (email === users[i].email ) {
//         alert(`Email Already Exist`) ;

//     }
// }