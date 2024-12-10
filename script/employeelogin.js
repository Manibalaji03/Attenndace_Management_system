
const validCredentials = {
    employeeId: "EMP123", 
    password: "password123" 
};


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 


    const employeeId = document.getElementById("employeeId").value.trim();
    const password = document.getElementById("password").value.trim();

    
    if (employeeId === validCredentials.employeeId && password === validCredentials.password) {
    
        window.location.href = "./employeeDashboard.html"; 
        } else {
            alert("Invalid username or password. Please try again.");
    }
});
