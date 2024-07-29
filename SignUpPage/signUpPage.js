function status() {
    let selection = document.getElementById('namee');
    let manager = document.getElementById('opt2');
    let attendee = document.getElementById('opt3');

    manager.classList.add('manager');
    attendee.classList.add('attendee');


    var result = selection.value;
    if (result === 'option2') {
        manager.classList.remove('manager');

    } else {
        if (result === 'option3') {
            attendee.classList.remove('attendee');


        }

    }
}

function dataSubmit() {
let userName = document.getElementById('name')
const errors = document.getElementById('userName')

let Email = document.getElementById('emailInput')
const emailError = document.getElementById('email')
const regx =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const password = document.getElementById('pass');
let result = document.getElementById('passwordMsg')
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if(userName.value == '' ){
 errors.innerHTML = 'Name must not be empty'
}
  if(Email.value == ''){
    emailError.innerHTML = 'email must not be empty' 
}
else if(!regx.test(Email.value)){
  emailError.innerHTML = 'email format is not valid'
}

if (password.value == '') {
          result.innerHTML = 'password must not be empty'
          result.style.color = 'red'
      }
       else if (!password_regex.test(password.value)) {
          result.innerHTML = 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character '
          // console.log(result.innerHTML);
          result.style.color = 'red'
       }
else{
    window.location.href = '/LoginPage/login.html'
}

    // const password = document.getElementById('pass');
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // let result = document.getElementById('passwordMsg')

    // var checker = document.getElementById('checker')

    // if (checker.checked) {

    //     if (password.value == '') {
    //         result.innerHTML = 'password must not be empty'
    //         result.style.color = 'red'
    //     }
    //      else if (!regex.test(password.value)) {
    //         result.innerHTML = 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character '
    //         // console.log(result.innerHTML);
    //         result.style.color = 'red'


    //     }
    //     else {
    //        window.location.href = "/LoginPage/login.html"
    //     }
    // } else{
    //     alert('You forget to click the checkBox')
    // }

    
    
}


function validateForm() {
    var genderInputs = document.getElementsByName("gender");
    let errr= document.getElementById('genderError')
    var genderSelected = false;
    
    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        genderSelected = true;
        break;
      }
    }
    
    if (!genderSelected) {
      errr.innerHTML = "Please select a gender";
      return false; // Prevent form submission
    } else {
      errr.innerHTML = "";
      return true; // Allow form submission
    }
  }
