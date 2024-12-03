function checkName() {
    const correctName = "alexandra"; // Specify the correct name here
    const userName = document.getElementById("nameInput").value.trim();
    if (userName === correctName) {
        window.location.href = "home.html"; // Redirect to the homepage
    } else {
        alert("access denied");
    }
}

// nav menu
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const toggle = document.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", (e) => {
        e.preventDefault(); // prevent the default link behavior
        dropdown.classList.toggle("active"); // toggle the dropdown visibility
    });
});





// function to show the popup
function showPopup() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("hidden"); // show overlay and popup
}

// function to close the popup
function closePopup() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden"); // hide overlay and popup
}

// add event listener for the "okay!" button
document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.getElementById("closePopup");
    closeButton.addEventListener("click", closePopup);

    // simulate popup opening (for demo purposes)
    setTimeout(showPopup, 2000);
});