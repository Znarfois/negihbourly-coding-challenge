let modal = document.querySelector('.modal');
let signUpBtn = document.querySelector('#sign-up-btn');
let main = document.querySelector('main');
function checkName() {
    //checks if name consists of a-z characters and between 2-20 characters
    var name=document.getElementById("first-name").value;
    var check = /^[A-Za-z\s\'\-]{2,20}$/;

      if (check.test(name)) {
        item.style.border = "4px solid green";
      }
  } 

signUpBtn.addEventListener('click', (e) => {
    modal.style.display="flex";
    //main.style.filter = "brightness(70%)";
});

function signIn() {

}

function signUp() {

}