document.getElementById('image_header').src = '/img/dolphine_Logo.png';
document.getElementById('Sign_Up').innerText = 'Sign Up'
// document.getElementById('Sign_Up').innerText ='Sign Up'
// document.getElementById('errorMsg')



function googleSignUp() {
    let hiddenInput = document.getElementById('formButton');

    if (hiddenInput.style.display === 'none' || hiddenInput.style.display === '') {
        hiddenInput.style.display = 'block';
    } else {
        hiddenInput.style.display = 'none';
    }
}

function logGoogle(){
    let testField = document.getElementById('inputEmail')
    let errorMsg = document.getElementById('errorMsg')
    errorMsg.style.color= 'red'

    
    // errorMsg.style.color = 'red'
    if(testField.value == ''){
     errorMsg.innerHTML =' this field must not be empty'
    }
    else{
    window.location.href = 'https://mail.google.com/' 

    }


}

function loginAcct() {
    window.location.href = '/LoginPage/login.html'  
}

function facebook() {
    window.location.href = 'https://web.facebook.com/'    
}

function instagram() {
    window.location.href = 'https://www.instagram.com/'    
}
function twitter() {
    window.location.href = 'https://www.twitter.com/'    
    
}