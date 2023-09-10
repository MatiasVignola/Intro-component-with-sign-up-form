const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const emailAddress = document.querySelector('#emailAddress');
const password = document.querySelector('#password');

const firstNameError = document.querySelector('#firstNameErorr');
const lastNameError = document.querySelector('#lastNameError');
const emailAddressError = document.querySelector('#emailAddressError');
const passwordError = document.querySelector('#passwordError');

const button = document.querySelector('#submit');

button.addEventListener('click', (e)=> {
    e.preventDefault();
    validateInput(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateInput(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailAddressError);
    validateInput(password.value, password, passwordError, 'Password cannot be empty');
});

function validateEmail(valueInput, divInput, divError){
    let regExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError)
    }else{
        showError(divInput, divError,'Looks like this is not an email')
    }
}

function validateInput(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nameInput);
    }else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, nameInput){
    divInput.style.border = '1px solid red';
    // divError.innerHTML = `
    // <img src="./images/icon-error.svg" alt="error">
    // <p>${error}</p>
    // `;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    // divError.innerHTML = ` `;
}


