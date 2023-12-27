// Function to toggle selected state and update pricing
function toggleSelected(button) {
    button.classList.toggle('selected');
    updatePricing();
}

// Function to update pricing based on selected options
function updatePricing() {
    const selectedOptions = document.querySelectorAll('.pricing-option.selected');
    let totalPrice = 0;

    selectedOptions.forEach(option => {
        const priceString = option.querySelector('.price').innerText;
        const price = parseFloat(priceString.replace('$', '').replace('€', '')); // Extract numeric value
        totalPrice += price;
    });

    // Update the displayed total price
    document.getElementById('total-price').innerText = totalPrice.toFixed(2); // Display total with two decimal places
}

// Function to update currency and unit options
function updateOptions() {
    updatePricing();
}

// Event listeners
document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
        toggleSelected(button);
    });
});

// Optional: Add more logic to customize currency and unit options
const currencySelector = document.getElementById('currency-selector');
const unitSelector = document.getElementById('unit-selector');

currencySelector.addEventListener('change', () => {
    updateOptions();
});

unitSelector.addEventListener('change', () => {
    updateOptions();
});