// Smooth scrolling for navigation links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');

        // Only prevent default if the link is a fragment (starts with #)
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Car Models Option
document.addEventListener('DOMContentLoaded', function () {
    const carSelect = document.getElementById('car');
    const modelSelect = document.getElementById('carModel');

    const carModels = {
        bmw: ["BMW M3", "BMW X5", "BMW Z4", "BMW 3 Series", "BMW 5 Series", "BMW 7 Series"],
        mercedes: ["Mercedes C-Class", "Mercedes E-Class", "Mercedes S-Class"],
        astonmartin: ["Aston Martin DB11", "Aston Martin Vantage", "Aston Martin Vanquish", "Aston Martin Valkyrie"],
        bugatti: ["Bugatti Chiron", "Bugatti Veyron", "Bugatti La Voiture Noire", "Bugatti Divo"],
        mclaren: ["McLaren 720S", "McLaren 600LT", "McLaren 570S", "McLaren 540C"],
        lamborghini: ["Lamborghini Huracan", "Lamborghini Aventador", "Lamborghini Urus", "Lamborghini Sián"],
        maserati: ["Grecale", "MC20", "GranCabrio", "GranTurismo", "Ghibli", "Levante"],
        ferrari: ["Ferrari 488", "Ferrari 812", "Ferrari 360", "Ferrari F430", "Ferrari SF90", "Ferrari F40"],
        porsche: ["Porsche 911", "Porsche Cayenne", "Porsche Taycan", "Porsche 718"],
        tesla: ["Model S", "Model X", "Model Y", "Model 3", "Cybertruck"],
        nissan: ["Nissan GT-R", "Nissan 370Z", "Nissan R34", "Nissan Skyline"],
    };

    carSelect.addEventListener('change', function () {
        const selectedBrand = carSelect.value;
        updateCarModels(selectedBrand);
    });

    function updateCarModels(brand) {
        modelSelect.innerHTML = '<option value="">Select a Car</option>';  // Reset models
        if (carModels[brand]) {
            const models = carModels[brand];
            models.forEach(function (model) {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }
    }
});

// Form validation with Required attribute and Email REGEX checking
document.querySelector('form').addEventListener('submit', function (event) {
    // We are no longer using event.preventDefault() to ensure form submits to PHP
    validateForm();
});

function validateForm() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const car = document.querySelector('select[name="car"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const deliveryDate = document.querySelector('input[name="deliveryDate"]').value;
    const terms = document.querySelector('input[name="terms"]').checked;

    let isValid = true;
    clearErrors();

    if (!name) {
        showError('nameError', 'Name is required.');
        isValid = false;
    }

    if (!email) {
        showError('emailError', 'Email is required.');
        isValid = false;
    } else if (!validEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    if (!phone) {
        showError('phoneError', 'Phone number is required.');
        isValid = false;
    }

    if (!car) {
        showError('carError', 'Car brand is required.');
        isValid = false;
    }

    if (!address) {
        showError('addressError', 'Address is required.');
        isValid = false;
    }

    if (!deliveryDate) {
        showError('deliveryDateError', 'Preferred delivery date is required.');
        isValid = false;
    }

    if (!terms) {
        showError('termsError', 'You must agree to the terms and conditions.');
        isValid = false;
    }

    // If all fields are valid, form will be submitted to PHP backend
    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}

function validEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(input);
}
