//======================================================= Third Try ============================================================\\


//    let users = [] ;
// let logInUser = {} ;

// function getAllUsers() {

//     let userInStringForm = localStorage.getItem("users");
//     let logInUserString = localStorage.getItem("users");
//     users = JSON.parse(userInStringForm) || [];
//     logInUser = JSON.parse( logInUserString ) || [];
//     console.log(users);
//     console.log(logInUser);
// }
// getAllUsers();

//============================================================



(() => {
    let isLogIn = localStorage.getItem("logInUser");
    if (isLogIn) {

        console.log("login", isLogIn);
        console.log("yes....");
        move("./home.html")
    } else {
        console.log("no....");
    }
})();


let users = [];
let logInUser = [];


function move(a) {
    window.location.href = a;
}

// function getAllUsers
(() => {
    let userInStringForm = localStorage.getItem("users");
    let logInUserInStringForm = localStorage.getItem("logInUser");
    users = JSON.parse(userInStringForm) || [];
    logInUser = JSON.parse(logInUserInStringForm) || {};
    console.log("users : ", users);
    console.log("LUsers : ", logInUser);
})();


function signUp(e) {
    e.preventDefault();

    let alert = document.querySelector(`#alert`);
    let name = document.querySelector("#name").value;
    let gender = document.querySelector("#gender").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let ConfirmPassword = document.querySelector("#passwordC").value;

    if (password !== ConfirmPassword) {
        alert.style.visibility = "visible";
        alert.innerHTML = " Password doesn't match ! please check and type again ";
        return;
    }

    let newUser = {
        name,
        email,
        password,
        ConfirmPassword,
        gender,
        DOB
    }

    let isMatch = false;
    for (let i = 0; i < users.length; i++) {

        if (email === users[i].email) {
            isMatch = true;
            console.log("checking");
            alert.style.visibility = "visible";
            alert.innerHTML = " This email is already registered ! kindly enter a new one  "
            return;
        }
    }


    console.log("running");
    users.push(newUser);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    // getAllUsers();

    move("./login.html");
}










//======================================================= Second Try ============================================================\\



// let SName = document.querySelector(`#name`) ;
// let SEmail = document.querySelector(`#email`) ;
// let SPassword = document.querySelector(`#password`) ;
// // let SDOB = document.querySelector(`#DOB`) ;
// // let SGender = document.querySelector(`#DOB`) ;
// // let SAddress = document.querySelector(`#DOB`) ;
// // let SCity = document.querySelector(`#DOB`) ;





//    // console.log("user: ", user.name);
//         // ============

// let users = [] ;
// let logInUser = {} ;

// function getAllUsers() {

//     let userInStringForm = localStorage.getItem("users");
//     let logInUserString = localStorage.getItem("users");
//     users = JSON.parse(userInStringForm) || [];
//     logInUser = JSON.parse( logInUserString ) || [];
//     console.log(users);
//     console.log(logInUser);
// }
// getAllUsers();


//         let isMatch = false ;

//         function move(a) {
//             window.location.href = a;
//         }

//         // get details from signup inputs

//         function signUp() {

//             let newUser = {
//             name: `${SName.value}` ,
//             email: `${SEmail.value}` ,
//             password: `${SPassword.value}` ,           
//             // // gender: SGender.value ,
//             // // address: SAddress.value ,
//             // // city: SCity.value 
//             }



//             // for (let i = 0;  i < users.length; i++) {
//             //     if (user[i].email === document.querySelector(`#email`).value ) {
//             //         alert("exist")
//             //         return ;
//             //     }

//             //     else{
//                     users.push(newUser) ;
//                     localStorage.setItem("SignUpUsers" ,JSON.stringify(users)) ;

//                     move("./login.html") ;
//             //     }
//             // }

//         }

//         function logIn() {

//             for (let i = 0; i < users.length; i++) {
//                 if (users[i].password === document.querySelector("#lPassword").value ) {
//                     if (users[i].email === document.querySelector("#lEmail").value ) {
//                       isMatch = true ;  
//                       localStorage.setItem("logged in", JSON.stringify(users[i]))

//                     }
//                 }

//                 // else { 
//                 // }
//             }

//             if (isMatch) {
//                 move("./home.html") ;

//             } else {
//                 alert("incorrect") ;

//             }

//          }






//============================================================ First Try ==========================================================\\




// function getSignUpUsers() {
//     let userInString = localStorage.getItem("users");
//     users = JSON.parse(userInString) || [];
//     console.log(users);
//     // let gender = document.querySelector(`#gender`) ;
// }

// getSignUpUsers();
// let users = [];


// function signUp() {

//     let signUpUsers = {
//         name: document.querySelector(`#name`).value,
//         email: document.querySelector(`#email`).value,
//         password: document.querySelector(`#password`).value,
//         //  gender : document.querySelector(`#gender`) ,
//         //  DOB : document.querySelector(`#DOB`).value 

//     };

//     for (let i = 0; i < users.length; i++) {
//         if (email === users[i].email) {
//             alert(`Email Already Exist`);
//             return;
//         }
//     }

//     users.push(signUpUsers);
//     console.log(users);

//     localStorage.setItem("users :", JSON.stringify(users));


//     function move(a) {
//         window.location.href = a ;
//     }

//     let login = "./login.html" ;
//     move(login);


//     // let email = document.querySelector(`#email`).value
//     // let password = document.querySelector(`#password`).value


//     // let users = [];

// }


// function logIn() {

//     let LogInPassword = document.querySelector(`#lPssword`);
//     let LogInEmail = document.querySelector(`#lEmail`);

//     let isMatch = false;

//     for (let i = 0; i < users.length; i++) {

//         if (LogInPassword === users[i].password) {


//             if (LogInEmail === users[i].email) {
//                 localStorage.setItem("logged in", JSON.stringify(users[i]))
//                 isMatch = true;
//                 window.location.href = "./home.html";
//                 break;
//             }
//         }
//     }

//     if (!isMatch) {
//         alert( " Incorrect email or password " )

//     }
// }