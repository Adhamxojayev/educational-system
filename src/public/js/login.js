passwordButton.onclick = () => {
    let img  = document.querySelector('#passwordButton img')
    if(passwordInput.type == 'password'){
        passwordInput.type = 'text'
        img.src = '/img/open-eye.svg'
    }else if(passwordInput.type == 'text'){
        passwordInput.type = 'password'
        img.src = '/img/closed-eye.svg'
    }
}