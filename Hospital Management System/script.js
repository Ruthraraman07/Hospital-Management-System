// Existing code for dynamic content loading
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll('.menu a');  // Select all menu links
    const mainContent = document.getElementById('main-content');

    // Function to load the content dynamically
    function loadContent(fileName) {
        fetch(fileName)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                mainContent.innerHTML = data;  // Insert the fetched HTML content
                // After loading new content, initialize scroll animations
                initializeScrollAnimations();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                mainContent.innerHTML = `<p>Sorry, the page could not be loaded. Please try again later.</p>`;
            });
    }

    // Add event listeners to each menu link
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent the default link behavior

            const fileName = this.getAttribute('href');  // Get the file name from the href attribute
            loadContent(fileName);  // Load the corresponding HTML content
        });
    });
});

// Existing code for hero text animation
window.onload = function () {
    document.querySelector('.hero-text').classList.add('visible');
};

// New code for scroll-triggered animations
function initializeScrollAnimations() {
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('in-view');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Trigger the check on page load or after new content is loaded
    handleScroll();
}

// Initialize scroll animations when the page loads
document.addEventListener("DOMContentLoaded", function () {
    initializeScrollAnimations();
});

// Fade-in effect when scrolling
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    images.forEach(img => {
        observer.observe(img);
    });
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value;
  
    // Basic validation check
    if (!name || !email || !rating || !feedback) {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Display confirmation message
    document.getElementById("feedbackForm").reset();  // Reset the form fields
    document.getElementById("confirmationMessage").style.display = "block";
    return false;  // Prevent form submission
  }

  // JavaScript for animation trigger (optional if you want the animations to be based on scroll position)
window.addEventListener('scroll', function () {
    const aboutSection = document.getElementById('about-us');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      aboutSection.style.opacity = 1;
      aboutSection.style.transform = 'translateY(0)';
    }
  });
  // Show Signup Page
function showSignup() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('signupPage').classList.remove('hidden');
    document.getElementById('forgotPasswordPage').classList.add('hidden');
}

// Show Login Page
function showLogin() {
    document.getElementById('signupPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('forgotPasswordPage').classList.add('hidden');
}

// Show Forgot Password Page
function showForgotPassword() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('signupPage').classList.add('hidden');
    document.getElementById('forgotPasswordPage').classList.remove('hidden');
}

// Toggle Password Visibility
function togglePassword(id) {
    var passwordInput = document.getElementById(id);
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

