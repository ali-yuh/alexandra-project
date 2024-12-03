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

// dropdown menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



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
    setTimeout(showPopup, 1000);
});

const giftBox = document.getElementById('giftBox');
const textBox = document.getElementById('textBox');

giftBox.addEventListener('click', () => {
  giftBox.classList.add('hidden');
  setTimeout(() => {
    textBox.classList.add('visible');
  }, 500);
});