const form = document.querySelector('.form-mail');



form.addEventListener('submit', (event) => {
    event.preventDefault();

    const _subject = form.querySelector('input[name="subject"]').value;
    const _email = form.querySelector('input[name="email"]').value;
    const _message = form.querySelector('textarea[name="message"]').value;
    if(_subject === '' || _email === '' || _message === ''){
        alert('Please fill all the fields');
        return;
    }

    emailjs.send("service_pm7ie9l","template_dt3v0kj",{
        message: _message,
        subject: _subject,
        email: _email,
    }).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully');
    })
    .catch((error) => {
        console.log('FAILED...', error);
        alert('Email failed to send');
    })
    .finally(() => {
        form.querySelector('input[name="subject"]').value = '';
        form.querySelector('input[name="email"]').value = '';
        form.querySelector('textarea[name="message"]').value = '';
    });
    
});