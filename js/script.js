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
