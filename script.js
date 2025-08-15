// quotes array
const quotes = [
  { text: "Start where you are.", category: "inspiration" },
  { text: "Learn by doing.", category: "education" }
];

// Display quote in DOM
function displayQuote(quote) {
  const container = document.getElementById("quoteDisplay");
  container.innerHTML = `<p>${quote.text}</p><small>${quote.category}</small>`;
}

// Show random quote
function showRandomQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  displayQuote(quotes[idx]);
}

// Add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  if (!textInput || !textInput.value.trim()) return;

  const newQuote = {
    text: textInput.value.trim(),
    category: categoryInput && categoryInput.value.trim() ? categoryInput.value.trim() : "uncategorized"
  };

  quotes.push(newQuote);
  displayQuote(newQuote);

  textInput.value = "";
  if (categoryInput) categoryInput.value = "";
}

// Create Add Quote form
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

// Attach event listener and initialize
const initApp = () => {
  const showBtn = document.getElementById("newQuote");
  if (showBtn) showBtn.addEventListener("click", showRandomQuote);

  createAddQuoteForm("quoteFormContainer");

  showRandomQuote();
};

// Run init when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);

// Expose functions globally
window.addQuote = addQuote;
window.createAddQuoteForm = createAddQuoteForm;
window.showRandomQuote = showRandomQuote;
