function checkName() {
    const correctName = "alex"; // Specify the correct name here
    const userName = document.getElementById("nameInput").value.trim();
    if (userName === correctName) {
        window.location.href = "home.html"; // Redirect to the homepage
    } else {
        alert("access denied");
    }
}