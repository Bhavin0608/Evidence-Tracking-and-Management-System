document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;

    // 1. Password Match Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // 2. Simple Role Check
    if (role === "") {
        alert("Please select an official role.");
        return;
    }

    // 3. Collect Data (For Prototype demonstration)
    const userData = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        role: role,
        age: document.getElementById('age').value
    };

    console.log("Registration Successful for:", userData);
    alert(`Account created successfully as ${role}! Redirecting to dashboard...`);
    
    // In a real app, you would send this to your PHP or Node.js backend here
    // window.location.href = "dashboard.html"; 
});