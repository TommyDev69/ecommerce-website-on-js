document.getElementById('image_header').src = '/img/dolphine_Logo.png';
document.getElementById('Sign_Up').innerText ='Sign Up'
// document.getElementById('Sign_Up').innerText ='Sign Up'




function googleSignUp() {
            let hiddenInput = document.getElementById('formButton');

            if (hiddenInput.style.display === 'none' || hiddenInput.style.display === '') {
                hiddenInput.style.display = 'block';
            } else {
                hiddenInput.style.display = 'none';
            }
        }
