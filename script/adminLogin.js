document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('adminLoginForm');

    // Predefined admin credentials
    const validAdminUsername = "admin";
    const validAdminPassword = "admin123";

    adminLoginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const enteredUsername = document.getElementById('adminUsername').value.trim();
        const enteredPassword = document.getElementById('adminPassword').value.trim();

        // Validate credentials
        if (enteredUsername === validAdminUsername && enteredPassword === validAdminPassword) {
            alert("Login successful!");
            window.location.href = "adminDashboard.html"; // Redirect to admin dashboard
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
