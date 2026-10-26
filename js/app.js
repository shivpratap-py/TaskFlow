const themeToggle = document.querySelector(".theme-toggle");
console.log(themeToggle)
const html = document.documentElement;
console.log(html)

themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");

    if(currentTheme == "dark"){
        html.setAttribute("data-theme", "light");
    } else{
        html.setAttribute("data-theme", "dark")
    }
})