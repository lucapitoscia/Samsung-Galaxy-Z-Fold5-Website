
// Luca Pitoscia
// 200290440
// March 23 2024 - April 6 2024
// Selling Out! Assignment 


document.addEventListener('DOMContentLoaded', function createHeaderAndFooter() {
    const headerHTML = `
        <header>
            <div class="header-container">
                <img src="/Samsung-Galaxy-Z-Fold5-Website/images/samsunglogo.jpeg" alt="Samsung Logo" class="logo">
                <nav>
                    <ul class="nav-links">
                        <li><a href="/Samsung-Galaxy-Z-Fold5-Website/index.html">Home</a></li>
                        <li><a href="/Samsung-Galaxy-Z-Fold5-Website/html/aboutus.html">About Us</a></li>
                        <li><a href="/Samsung-Galaxy-Z-Fold5-Website/html/contactus.html">Contact Us</a></li>
                        <li><a href="/Samsung-Galaxy-Z-Fold5-Website/html/galaxyzfold5.html">BUY NOW!</a></li>
                    </ul>
                </nav>
                <div class="cart" onclick="openCart()">
                    <img src="/Samsung-Galaxy-Z-Fold5-Website/images/icon-cart.svg" alt="cart icon">
                    <span class="item_value" style="display: none;">0</span>
                </div>
            </div>
        </header>`;

    // Construct footer HTML with fixed paths
    const footerHTML = `
        <footer>
            <div class="container">
                <img src="/Samsung-Galaxy-Z-Fold5-Website/images/samsunglogo.jpeg" alt="Samsung Logo" class="logo">
                <p>&copy; 2024 Samsung. All rights reserved.</p>
            </div>
        </footer>`;

    // Insert the header at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Append the footer HTML to the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});



// Homepage Script

// Homepage Video Loop
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('myVideo');

    // Function to handle what happens when the video ends
    function onVideoEnd() {
        // Wait for 10 seconds after the video ends, then play it again
        setTimeout(() => {
            video.play();
        }, 7000); 
    }

    // Attach the event listener for when the video ends
    video.onended = onVideoEnd;

    // Play the video immediately when the page loads
    video.play();
});

// Homepage Slider Scroll Loop Script

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const numberOfImages = images.length;
    const slideWidth = images[0].clientWidth; // Assume all images are the same width

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % numberOfImages; // Loop back to the first image after the last one
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Change slide every 4 seconds to account for 2 seconds pause + 2 seconds for the actual transition
    setInterval(moveToNextSlide, 5000);
});

// Product Page Scripts

// Radio Button Pricing Adjustments
document.addEventListener('DOMContentLoaded', () => {
    // Function to update the price based on selected storage option
    function updatePrice() {
        const selectedStorage = document.querySelector('input[name="storage"]:checked');
        if (selectedStorage) {
            const newPrice = selectedStorage.getAttribute('data-price');
            document.querySelector('.price').textContent = `$${newPrice}`;
        }
    }

    // Listen for changes on each storage option radio button
    document.querySelectorAll('input[name="storage"]').forEach(input => {
        input.addEventListener('change', updatePrice);
    });

    
});

// Product Page Video Loop
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('productVideo');

    // Function to handle what happens when the video ends
    function onVideoEnd() {
        // Wait for 5 seconds after the video ends, then play it again
        setTimeout(() => {
            video.play();
        }, 5000); 
    }

    
    video.onended = onVideoEnd;

    
    video.play();
});




