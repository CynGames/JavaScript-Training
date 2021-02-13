// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function (event) {
  // Hide Results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  event.preventDefault();
});

// Calculate results
function calculateResults(event) {

  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");

  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compuate monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    document.getElementById("results").style.display = "block";
  } else {
    showError("Please check yourself before you wreck yourself");
  }

  document.getElementById("loading").style.display = "none";
}

function showError(error) {
  // Create div
  const errorDiv = document.createElement("div");

  // GetElement
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");


  // Add class
  errorDiv.className = "alert alert-danger";

  // Create Text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}