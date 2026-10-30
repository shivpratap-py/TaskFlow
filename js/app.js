// ======================== THEME ========================
// Getting the class of the toggle btn 
const themeToggle = document.querySelector(".theme-toggle");
console.log(themeToggle)
const html = document.documentElement;

// Read a saved value 
let savedTheme = localStorage.getItem("theme");
console.log(savedTheme)
if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
}

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

// ======================== Assignement ========================
const assignmentList = document.querySelector(".assignment-list")

const Assignement = {
    symbol : "DSM",
    title : "Adder",
    subject : "Digital System and Microprocessor",
    deadline : "2026-11-02",
    status : "pending"
}
const Assignement2 = {
    symbol : "CAED",
    title : "LAB ASSESMENT",
    subject : "Computer Aided Engineering Drawing",
    deadline : "2026-11-02",
    status : "pending"
}

const assignments = [
    Assignement,
    Assignement2
];

assignments.forEach(e => {
    const newElement = document.createElement("article");
    newElement.classList.add("assignment-item");

    const icon = document.createElement("div");
    icon.classList.add("assignment-icon");
    icon.textContent = e.symbol;

    // making div to store info 
    const info = document.createElement("div");
    info.classList.add("assignment-info");
    
    // making title 
    const assignmentTitle = document.createElement("h3")
    assignmentTitle.textContent = e.title
    console.log(assignmentTitle)

    // making subject 
    const assignmentSubject = document.createElement("p")
    assignmentSubject.textContent = e.subject

    // making date and due 
    const assignmentDue = document.createElement("span")
    assignmentDue.textContent = e.deadline


    // Making status 
    const assignmentStatus = document.createElement("span")
    assignmentStatus.classList.add("assignment-status");
    assignmentStatus.classList.add(e.status);
    assignmentStatus.textContent = e.status
    console.log(assignmentSubject)

    newElement.appendChild(icon);
    info.appendChild(assignmentTitle);
    info.appendChild(assignmentSubject);
    info.appendChild(assignmentDue);
    newElement.appendChild(info);
    
    assignmentList.appendChild(newElement);
    newElement.appendChild(assignmentStatus);
});