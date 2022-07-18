
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
        password: document.querySelector(`#password`).value,
        //  gender : document.querySelector(`#gender`) ,
        //  DOB : document.querySelector(`#DOB`).value 

    };

    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email) {
            alert(`Email Already Exist`);
            return;
        }
    }

    users.push(signUpUsers);
    console.log(users);

    localStorage.setItem("users :", JSON.stringify(users));


    function move(a) {
        window.location.href = a ;
    }

    let login = "./login.html" ;
    move(login);

    
    // let email = document.querySelector(`#email`).value
    // let password = document.querySelector(`#password`).value
    
    
    // let users = [];
    
    function getSignUpUsers() {
        let userInString = localStorage.getItem("users");
        users = JSON.parse(userInString) || [];
        console.log(users);
    }
    getSignUpUsers();
}
    

function logIn() {

    let LogInPassword = document.querySelector(`#lPssword`);
    let LogInEmail = document.querySelector(`#lEmail`);

    let isMatch = false;

    for (let i = 0; i < users.length; i++) {

        if (LogInPassword === users[i].password) {


            if (LogInEmail === users[i].email) {
                localStorage.setItem("logged in", JSON.stringify(users[i]))
                isMatch = true;
                window.location.href = "./home.html";
                break;
            }
        }
    }

    if (!isMatch) {
        alert( " Incorrect email or password " )

    }
}
