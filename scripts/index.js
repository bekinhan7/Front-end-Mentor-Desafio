window.addEventListener('load',()=>{
    
    btnSubmit = document.getElementById('btn-submit');
    email = document.getElementById('email');
    msgError = document.getElementById('msg-error');
    signUp = document.getElementById('signup');
    thanks = document.getElementById('thanks');
    thanksMsg = document.getElementById('thanks-msg');
    btnDismiss = document.getElementById('btn-dismiss');

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    btnSubmit.addEventListener('click', (e) =>{
        e.preventDefault()
        
        if (email.value && validateEmail(email.value)) {
            signUp.style.display = 'none';
            thanksMsg.innerHTML= `<p>Um e-mail de confirmação foi enviado<br> para <b>${email.value}</b>
            <br>Por favor, abra-o e clique no botão dentro <br>para confirmar sua assinatura.</p>`
            thanks.style.display = 'flex'

        } else {
            msgError.classList.remove('disable');
            email.classList.add('input-error');
        }
    })

    email.addEventListener('focus', ()=>{
        msgError.classList.add('disable');
        email.classList.remove('input-error');
    })
    btnDismiss.addEventListener('click', ()=>{
        thanks.style.display = 'none';
        signUp.style.display = 'flex'
        email.value = '';
    })
})