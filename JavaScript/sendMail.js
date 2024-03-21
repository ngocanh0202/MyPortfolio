const form = document.querySelector('.form-mail');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const _subject = form.querySelector('input[name="subject"]').value;
    const _email = form.querySelector('input[name="email"]').value;
    const _message = form.querySelector('textarea[name="message"]').value;
    if(_subject.trim() === '' || _email.trim() === '' || _message.trim() === ''){
        alert('Please fill all the fields');
        return;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_email)){
        alert('Invalid email');
        return;
    }

    emailjs.send("service_pm7ie9l","template_dt3v0kj",{
        message: _message.trim(),
        subject: _subject.trim(),
        email: _email.trim(),
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