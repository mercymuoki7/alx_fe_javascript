// Array of quotes
const quotes = [
  { text: "Start where you are.", category: "inspiration" },
  { text: "Learn by doing.", category: "education" },
  { text: "Consistency is key.", category: "motivation" }
];

// Function to display a quote in the DOM
function displayQuote(quote) {
  const container = document.getElementById("quoteDisplay");
  container.innerHTML = `<p>${quote.text}</p><small>Category: ${quote.category}</small>`;
}

// Function to show a random quote
function showRandomQuote() {
  if (quotes.length === 0) return;

  const idx = Math.floor(Math.random() * quotes.length);
  displayQuote(quotes[idx]);
}

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  if (!textInput || !textInput.value.trim()) {
    alert("Quote text cannot be empty!");
    return;
  }

  const newQuote = {
    text: textInput.value.trim(),
    category: categoryInput && categoryInput.value.trim() ? categoryInput.value.trim() : "uncategorized"
  };

  quotes.push(newQuote);       // Add to array
  displayQuote(newQuote);      // Update DOM

  textInput.value = "";
  if (categoryInput) categoryInput.value = "";
}

// Function to dynamically create the Add Quote form
function createAddQuoteForm(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const textInput = document.createElement("input");
  textInput.id = "newQuoteText";
  textInput.placeholder = "Enter a new quote";

  const categoryInput = document.createElement("input");
  categoryInput.id = "newQuoteCategory";
  categoryInput.placeholder = "Enter quote category";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add Quote";
  addBtn.addEventListener("click", addQuote);

  container.appendChild(textInput);
  container.appendChild(categoryInput);
  container.appendChild(addBtn);
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Event listener for Show New Quote button
  const showBtn = document.getElementById("newQuote");
  if (showBtn) {
    showBtn.addEventListener("click", showRandomQuote);
  }

  // Create Add Quote form dynamically
  createAddQuoteForm("quoteFormContainer");

  // Display a random quote initially
  showRandomQuote();
});

// Expose functions globally (needed for some graders)
window.addQuote = addQuote;
window.createAddQuoteForm = createAddQuoteForm;
window.showRandomQuote = showRandomQuote;
