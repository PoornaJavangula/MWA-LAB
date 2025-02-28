// Function to get user input and perform calculations
function calculate() {
  // Get input from the user using prompt
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));

  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter numbers.");
    return; // Exit the function if input is invalid
  }

  // Perform arithmetic operations
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;

  // Handle division by zero
  let quotient;
  if (num2 === 0) {
    quotient = "Cannot divide by zero";
  } else {
    quotient = num1 / num2;
  }

  // Display the results using alert (or console.log)
  const results = `
    Sum: ${sum}
    Difference: ${difference}
    Product: ${product}
    Quotient: ${quotient}
  `;

  alert(results); // Or console.log(results);
}

// Call the calculate function to start the process
calculate();