function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme)


window.onload = ()=>{
    document.documentElement.className = "dark";
}