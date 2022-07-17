
// let name = document.querySelector(`#name`).value ;
// let email = document.querySelector(`#email`).value ;
// let password = document.querySelector(`#password`).value ;
// let gender = document.querySelector(`#gender`) ;
// let DOB = documentr.querySelector(`#DOB`).value ;


let users = [];

function signUp() {

    let signUpUsers = {
        name: document.querySelector(`#name`).value,
        email: document.querySelector(`#email`).value,
        //  password : document.querySelector(`#password`).value ,
        //  gender : document.querySelector(`#gender`) ,
        //  DOB : document.querySelector(`#DOB`).value 

    };

    users.push(signUpUsers);
    console.log(users);

    localStorage.setItem("users :", JSON.stringify(users));


    function move() {
        window.location.href = "./login.html";
    }

    move();

}