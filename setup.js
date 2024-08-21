document.getElementById('btn').addEventListener('click', function(event) {
    // Get all form inputs
    const quantity = document.querySelector('.quantity').value.trim();
    const delivery = document.querySelector('.delivery').value.trim();
    const description = document.querySelector('.description').value.trim();
    const price = document.querySelector('.pricein').value.trim();
    const location = document.querySelector('.pricein:nth-of-type(2)').value.trim(); // Assuming second input with class 'pricein'
    const deliveryDate = document.querySelector('.pricein:nth-of-type(3)').value.trim(); // Assuming third input with class 'pricein'
    const terms = document.querySelector('.thick').checked;
    const userStatus = document.querySelector('input[name="rad1"]:checked');
    const transactionType = document.querySelector('input[name="rad2"]:checked');
    const paymentMode = document.querySelector('input[name="rad3"]:checked');

    // Check if all fields are filled
    if (!quantity || !delivery || !description || !price || !location || !deliveryDate || !terms || !userStatus || !transactionType || !paymentMode) {
        alert('Error: Kindly fill all the form fields before proceeding.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // If all fields are filled, allow form submission
    alert('Form submitted successfully!');
});