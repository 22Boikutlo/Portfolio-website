// Select the hamburger and the menu
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.unOrderedList');

// Toggle the active class on hamburger click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Select the search input and content sections
const searchInput = document.querySelector('input[type="search"]');
const contentSections = document.querySelectorAll('article');

// Listen for input in the search field
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase(); // Get the search query and convert to lowercase
    
    contentSections.forEach(section => {
        const content = section.textContent.toLowerCase(); // Get the content of each section
        
        // If the section content includes the search query, show it, else hide it
        if (content.includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
