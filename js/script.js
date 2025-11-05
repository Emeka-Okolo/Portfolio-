const form = document.getElementById('request-form')

        const STORAGE_KEY = 'userRequestForm';


form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Get values from the form inputs
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('user-email').value;
    const num = document.getElementById('user-num').value;
    const interest = document.getElementById('service-of-interest').value;
    const timeline = document.getElementById('user-timeline').value;
    const details = document.getElementById('project-details').value;

    // Create the object to be stored
    const requestData = {
        fullName: fullName,
        email: email,
        num: num,
        interest: interest,
        timeline: timeline,
        details: details
    };

    // Convert the JavaScript object into a JSON string
    const requestDataJSON = JSON.stringify(requestData);

    // Store the JSON string in sessionStorage
    sessionStorage.setItem(STORAGE_KEY, requestDataJSON);

    alert('Received Emeka Says Thanks!');
});



 document.addEventListener('DOMContentLoaded', () => {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectItems = document.querySelectorAll('.project-item');

            // Initial active state for 'All' button
            document.querySelector('[data-filter="all"]').classList.replace('bg-gray-700', 'bg-orange-600');
            document.querySelector('[data-filter="all"]').classList.replace('hover:bg-gray-600', 'hover:bg-orange-700');


            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.dataset.filter;

                    // 1. Manage Active Button Styles
                    filterButtons.forEach(btn => {
                        // Reset all buttons to default gray
                        btn.classList.remove('bg-orange-600', 'hover:bg-orange-700');
                        btn.classList.add('bg-gray-700', 'hover:bg-gray-600');
                    });
                    
                    // Set the clicked button to the active orange style
                    button.classList.remove('bg-gray-700', 'hover:bg-gray-600');
                    button.classList.add('bg-orange-600', 'hover:bg-orange-700');


                    // 2. Filter Project Items
                    projectItems.forEach(item => {
                        const categories = item.dataset.category;

                        // Check if the item's categories string includes the selected filter
                        if (categories.includes(filter)) {
                            // Show the item
                            item.style.display = 'block'; 
                        } else {
                            // Hide the item
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });