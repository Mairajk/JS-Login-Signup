
// let name = document.querySelector(`#name`).value ;
// let email = document.querySelector(`#email`).value ;
// let password = document.querySelector(`#password`).value ;
// let DOB = documentr.querySelector(`#DOB`).value ;





   // console.log("user: ", user.name);
        // ============

        let users = [] ;
        let logInUser = {} ;
        function getAllUsers() {
            let userInStringForm = localStorage.getItem("users");
            let logInUserString = localStorage.getItem("users");
            users = JSON.parse(userInStringForm) || [];
            logInUser = JSON.parse( logInUserString ) || [];
            console.log(users);
            console.log(logInUser);
        }
        getAllUsers();

        
        let isMatch = false ;
        
        function move(a) {
            window.location.href = a;
        }


        function signUp() {

            // get details from signup inputs
            let newUser = {
            name: document.querySelector(`#name`).value,
            email: document.querySelector(`#email`).value ,
            password: document.querySelector(`#password`).value          
                // gender: 
                // address:
           
                // city: 
            }
            
            
            
            // for (let i = 0;  i < users.length; i++) {
            //     if (user[i].email === document.querySelector(`#email`).value ) {
            //         alert("exist")
            //         return ;
            //     }
                
            //     else{
                    users.push(newUser) ;
                    localStorage.setItem("users", JSON.stringify(users)) ;
                    
                    move("./login.html") ;
            //     }
            // }
            
        }

        function logIn() {

            for (let i = 0; i < users.length; i++) {
                if (users[i].password === document.querySelector("#lPassword").value ) {
                    if (users[i].email === document.querySelector("#lEmail").value ) {
                      isMatch = true ;  
                      localStorage.setItem("logged in", JSON.stringify(users[i]))
                      
                    }
                }
                
                // else { 
                // }
            }
            
            if (isMatch) {
                move("./home.html") ;
                
            } else {
                alert("incorrect") ;
                
            }

         }



































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
