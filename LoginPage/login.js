function myPassword(){
    let pass = document.getElementById('pass')
    let eye = document.getElementById('passImage');

    if(pass.type === 'password'){
        pass.type='text'
        eye.classList.remove('fa-slash-eye');
        eye.classList.add('fa-eye')
    }else{
        pass.type='password'

        eye.classList.remove('fa-eye')
        eye.classList.add('fa-slash-eye')
    }
}