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

//themeToggle.addEventListener('click', setTheme);
themeToggle.addEventListener('click', setTheme);


window.onload = ()=>{
    document.documentElement.className = "dark";
}