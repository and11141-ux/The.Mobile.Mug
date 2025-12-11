// Booking form handler
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("bookingMessage").textContent = "Thank you! Your request has been sent.";
    });
}

// Drink builder
const buildBtn = document.getElementById("buildButton");
if (buildBtn) {
    buildBtn.addEventListener("click", function() {
        const size = document.getElementById("size").value;
        const milk = document.getElementById("milk").value;
        const flavor = document.getElementById("flavor").value;
        document.getElementById("drinkOutput").textContent = `Your drink: ${size} with ${milk} milk and ${flavor} syrup!`;
    });
}
