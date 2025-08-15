// Quotes array
let quotes = [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Do one thing every day that scares you.", category: "Motivation" },
  { text: "Success is not final, failure is not fatal.", category: "Wisdom" }
];

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  const { text, category } = quotes[randomIndex];
  quoteDisplay.innerHTML = `<p>"${text}"</p><small>— ${category}</small>`;
}

// Function to add a new quote to the array and update the DOM
function addQuote(text, category) {
  if (text.trim() && category.trim()) {
    quotes.push({ text, category });
    displayRandomQuote(); // Update DOM with new quote
  }
}

// Create and append the Add Quote form
function createAddQuoteForm() {
  const form = document.createElement("form");

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Enter quote";

  const categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.placeholder = "Enter category";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add Quote";

  form.appendChild(textInput);
  form.appendChild(categoryInput);
  form.appendChild(submitBtn);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addQuote(textInput.value, categoryInput.value);
    textInput.value = "";
    categoryInput.value = "";
  });

  document.body.appendChild(form);
}

// Event listener for “Show New Quote” button
document.getElementById("new-quote-btn").addEventListener("click", displayRandomQuote);

// Initialize page
createAddQuoteForm();
displayRandomQuote();
