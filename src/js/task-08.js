const inputEmail = document.getElementsByName('email')[0];
const inputPassword = document.getElementsByName('password')[0];

const btnSubmit = document.querySelector('button[type=submit]');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    process();
});


function process() {
    if (!inputEmail.value || !inputPassword.value) {
        alert('All fields must be filled in.');
        return;
    }

    const emailName = inputEmail.getAttribute('name');
    const emailValue = inputEmail.value;

    const passwordName = inputPassword.getAttribute('name');
    const passwordValue = inputPassword.value;

    const obj = {
        [emailName]: emailValue,
        [passwordName]: passwordValue
    };

    console.log(obj);
}