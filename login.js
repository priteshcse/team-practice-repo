const validUser = {
	username: "admin",
	password: "12345",
};

function login() {
	const user = document.getElementById("username").value.trim();
	const pass = document.getElementById("password").value.trim();
	const errorMsg = document.getElementById("error-message");

	if (user === validUser.username && pass === validUser.password) {
		alert("Login Successful!");
		window.location.href = "dashboard.html";
	} else {
		errorMsg.textContent = "Invalid username or password!";
	}
}
