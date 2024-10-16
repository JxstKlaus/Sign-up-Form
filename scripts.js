const themeToggle = document.querySelector(".theme-toggle");
const circle = document.querySelector(".circle");

function setTheme() {
    themeToggle.classList.toggle("active")
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
    if (newTheme === "dark"){
        circle.style.background = "white";
        themeToggle.style.background = "black";
        themeToggle.style.justifyContent = 'flex-start';
        
    }
    else{
        circle.style.background = "black";
        themeToggle.style.background = "white";
        themeToggle.style.justifyContent = 'flex-end'
    }
}


//Togge theme
themeToggle.addEventListener('click', setTheme);


window.onload = ()=>{
    document.documentElement.className = "dark";
}

//set red border on input error
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const form = document.querySelector('form');

const fullName = document.getElementById("full_name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const confirmPass = document.getElementById("confirm_password");
const terms = document.getElementById('terms');
const error = document.querySelector('.error');

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const isEmailValid = email.value.length > 0  &&  emailRegExp.test(email.value);
    const isFullNameValid = fullName.value.length > 0;
    const isPasswordValid = pass.value.length > 8;
    const isConfirmValid = pass.value === confirmPass.value && isPasswordValid;
    const isTermsChecked = terms.checked;

    if (!isFullNameValid) {
        fullName.parentElement.classList.add("invalid");
        //error.textContent = "Don't be shy, darling!";
    } else{
        fullName.parentElement.classList.remove("invalid");
    }
    if (!isEmailValid) {
        email.parentElement.classList.add("invalid");
        //error.textContent = "Enter a correct email, darling!";
    } else{
        fullName.parentElement.classList.remove("invalid");
    }
    if (!isPasswordValid) {
        pass.parentElement.classList.add("invalid");
        //error.textContent = "Password must be at least 8 letters, darling!";
    } 
    if (!isConfirmValid) {
        confirmPass.parentElement.classList.add("invalid");
        //error.textContent = "Passwords don't match, darling!";
    }else{
        fullName.parentElement.classList.remove("invalid");
    }
    if (!isTermsChecked){
        error.textContent = "Accept the terms, darling!";
    }else{
        error.textContent = "";
    }
    if (isEmailValid && isFullNameValid && isPasswordValid && isConfirmValid && isTermsChecked) {
      error.textContent = "";
      form.submit();
    }
  });