function signup() {
	const username = document.getElementById("username").value.trim();
	const password = document.getElementById("password").value.trim();
	const confirmPassword = document
		.getElementById("confirmPassword")
		.value.trim();
	const message = document.getElementById("message");

	if (!username || !password || !confirmPassword) {
		message.textContent = "All fields are required!";
		message.className = "error";
		return;
	}

	if (password !== confirmPassword) {
		message.textContent = "Passwords do not match!";
		message.className = "error";
		return;
	}

	const userData = { username, password };
	localStorage.setItem("user", JSON.stringify(userData));

	message.textContent = "Signup successful! Redirecting to login...";
	message.className = "success";

	setTimeout(() => {
		window.location.href = "login.html";
	}, 1500);
}
