let errorContainer = document.querySelector('.error_container');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const emailAddress = document.querySelector('#emailAddress');
const password = document.querySelector('#password');
const button =document.querySelector('#submit');

button.addEventListener('click', (e)=> {
    e.preventDefault();
    validateInput(firstName.value, firstName),
    validateInput(lastName.value, lastName),
    validateEmail(emailAddress.value, emailAddress),
    validateInput(password.value, password)
});

function validateEmail(valueInput, divInput){
    let regExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    if(regExp.test(valueInput) == true){
        hideError(divInput)
    }else{
        showError(divInput)
    }
}

function validateInput(valueInput, divInput){
    if(valueInput.length == 0){
        showError(divInput);
    }else {
        hideError(divInput);
    }
}

function showError(divInput){
    divInput.style.border = '1px solid red';
    errorContainer.style.display = 'flex';
}

function hideError(divInput){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    errorContainer.style.display = 'none';
}


// const firstName = document.querySelector('#firstName');
// const lastName = document.querySelector('#lastName');
// const emailAddress = document.querySelector('#emailAddress');
// const password = document.querySelector('#password');

// const firstNameError = document.querySelector('#firstNameErorr');
// const lastNameError = document.querySelector('#lastNameError');
// const emailAddressError = document.querySelector('#emailAddressError');
// const passwordError = document.querySelector('#passwordError');

// let errorContainer = document.querySelector('.error_container');

// const button = document.querySelector('#submit');

// button.addEventListener('click', (e)=> {
//     e.preventDefault();
//     validateInput(firstName.value, firstName, firstNameError);
//     validateInput(lastName.value, lastName, lastNameError);
//     validateEmail(emailAddress.value, emailAddress, emailAddressError);
//     validateInput(password.value, password, passwordError);
// });

// function validateEmail(valueInput, divInput, divError){
//     let regExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
//     if(regExp.test(valueInput) == true){
//         hideError(divInput, divError)
//     }else{
//         showError(divInput, divError)
//     }
// }

// function validateInput(valueInput, divInput, divError){
//     if(valueInput.length == 0){
//         showError(divInput, divError);
//     }else {
//         hideError(divInput, divError);
//     }
// }

// function showError(divInput, divError){
//     divInput.style.border = '1px solid red';
//     errorContainer.style.display = 'none';
// }

// function hideError(divInput, divError){
//     divInput.style.border = '1px solid hsl(246, 25%, 77%)';
// }


