document.addEventListener('DOMContentLoaded', () => {
    // Add DNA and Microscope Elements Dynamically
    const traditionalSection = document.getElementById('traditional');
    const modernSection = document.getElementById('modern');

    const dnaElement = document.createElement('div');
    dnaElement.innerHTML = '<img src="dna.png" alt="DNA" class="dynamic-img">';
    dnaElement.style.position = 'absolute';
    dnaElement.style.top = '30px';
    dnaElement.style.right = '20px';
    
    const microscopeElement = document.createElement('div');
    microscopeElement.innerHTML = '<img src="microscope.png" alt="Microscope" class="dynamic-img">';
    microscopeElement.style.position = 'absolute';
    microscopeElement.style.bottom = '30px';
    microscopeElement.style.left = '20px';

    // Append to sections
    traditionalSection.appendChild(dnaElement);
    modernSection.appendChild(microscopeElement);

    // Form validation
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
    });
});

// Modal functionality for image display
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}
// Scroll Animation Functionality
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(function (element) {
        const position = element.getBoundingClientRect();
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible'); // Add visible class
        } else {
            element.classList.remove('visible'); // Remove visible class
        }
    });
});
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
function showLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'block';
}

function hideLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'none';
}

// Example usage
showLoadingSpinner(); // Before fetching content
hideLoadingSpinner(); // After content is loaded
document.getElementById('load-more').addEventListener('click', function() {
    const contentArea = document.getElementById('dynamic-content');
    const spinner = document.getElementById('loading-spinner');

    // Show the loading spinner
    spinner.style.display = 'block';

    // Fetch content from a JSON file or API
    fetch('data.json') // Replace with your API or file path
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Clear the content area before adding new data (optional)
            contentArea.innerHTML = '';

            // Loop through the data and create new elements
            data.forEach(item => {
                const contentDiv = document.createElement('div');
                contentDiv.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
                contentArea.appendChild(contentDiv);
            });

            // Hide the loading spinner
            spinner.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            spinner.style.display = 'none'; // Hide spinner on error
        });
});
// Select the button and the sections
const loadMoreBtn = document.getElementById("load-more-btn");
const faqsSection = document.getElementById("faqs");
const quizSection = document.getElementById("quiz");

// Track whether content is currently shown or hidden
let contentVisible = false;

// Add click event listener to the button
loadMoreBtn.addEventListener("click", function() {
    if (contentVisible) {
        // Hide content and update button text
        faqsSection.style.display = "none";
        quizSection.style.display = "none";
        loadMoreBtn.innerText = "Load More Content";
    } else {
        // Show content and update button text
        faqsSection.style.display = "block";
        quizSection.style.display = "block";
        loadMoreBtn.innerText = "Show Less Content";
    }
    // Toggle content visibility state
    contentVisible = !contentVisible;
});
