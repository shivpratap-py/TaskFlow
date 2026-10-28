// ======================== THEME ========================
// Getting the class of the toggle btn 
const themeToggle = document.querySelector(".theme-toggle");
console.log(themeToggle)
const html = document.documentElement;

// Read a saved value 
let savedTheme = localStorage.getItem("theme");
console.log(savedTheme)

html.setAttribute("data-theme", savedTheme)

// Event listner
themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");

    if(currentTheme == "dark"){
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else{
        html.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark");
    }
})

