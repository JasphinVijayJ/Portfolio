const arrow = document.getElementById("scrollArrow");

window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
        arrow.style.display = "block";
    }
    else {
        arrow.style.display = "none";
    }
})

arrow.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ----------------------------------------------------------------

const navMenu = document.getElementById('mobileMenu');
const allNavbar = document.querySelectorAll('.navbar a');


// Toggle mobile menu
function toggleMenu() {
    navMenu.classList.toggle('show');
}


// Close menu when any nav link is clicked
for (const navbar of allNavbar) {
    navbar.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })
}


// Highlight current page in navigation

window.addEventListener('load', updateActiveNav);
window.addEventListener('hashchange', updateActiveNav);

function updateActiveNav() {
    const currentPage = window.location.hash || '#';

    for (const navbar of allNavbar) {
        if (navbar.getAttribute('href') === currentPage) {
            navbar.classList.add('gradient-color');
        }
        else {
            navbar.classList.remove('gradient-color');
        }
    }
};


// ------------ Update copyright year automatically ---------------

document.getElementById('year').textContent = new Date().getFullYear();


// ---------------------- Form Validation ------------------------------------------

const form = document.querySelector("form");

const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userSubject = document.querySelector('#subject');
const userMessage = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    fetchingData();

});

// ----------------------------------------------------------------

function dataValidation() {
    const trimedName = userName.value.trim();
    const trimedEmail = userEmail.value.trim();
    const trimedSubject = userSubject.value.trim();
    const trimedMessage = userMessage.value.trim();

    let isValid = true;
    const validatedData = {};

    if (trimedName === '') {
        setError(userName, "Enter Valid UserName");
        isValid = false;
    }
    else {
        setSuccess(userName);
        validatedData.name = trimedName;
    }

    if (trimedEmail === '') {
        setError(userEmail, "Enter Valid Email");
        isValid = false;
    }
    else {
        setSuccess(userEmail);
        validatedData.email = trimedEmail;
    }

    if (trimedSubject === '') {
        setError(userSubject, "Enter Valid Subject");
        isValid = false;
    }
    else {
        setSuccess(userSubject);
        validatedData.subject = trimedSubject;
    }

    if (trimedMessage === '') {
        setError(userMessage, "Enter Valid Message");
        isValid = false;
    }
    else {
        setSuccess(userMessage);
        validatedData.message = trimedMessage;
    }


    function setError(inputBox, message) {
        const small = inputBox.nextElementSibling;
        small.innerText = message;
    }

    function setSuccess(inputBox) {
        const small = inputBox.nextElementSibling;
        small.innerText = '';
    }

    if (isValid) return validatedData;
    else return null;           // This controls whether the form should proceed
}

// ----------------------------------------------------------------

function fetchingData() {

    const finalValidatedData = dataValidation();

    if (!finalValidatedData) return;   // Stop if validation failed

    const formData = new FormData();
    formData.append("access_key", "d41735d1-af9e-4fb1-8d0f-3071e1c3c87e");
    formData.append("name", finalValidatedData.name);
    formData.append("email", finalValidatedData.email);
    formData.append("subject", finalValidatedData.subject);
    formData.append("message", finalValidatedData.message);

    // For Post
    fetch(form.action, {
        method: "POST",
        body: formData
    })
        .then((response) => {
            if (response.ok) {
                alert("Form submitted successfully!")
                form.reset();
            }
            else alert("Oops! Something went wrong. Please try again.");
        })
        .catch(error => alert("Network error. Please check your connection."));
}

// ----------------------------------------------------------------
// Hide error message when user starts typing
const inputs = form.querySelectorAll('input, textarea');

for (const input of inputs) {
    input.addEventListener('input', () => {
        const small = input.nextElementSibling;
        if (small.tagName === 'SMALL') {
            small.textContent = '';
        }
    })
}

// ----------------------------------------------------------------
