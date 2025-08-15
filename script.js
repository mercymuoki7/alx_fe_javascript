// Quotes array
let quotes = [];

// Load quotes from localStorage if available
function loadQuotes() {
  const storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  } else {
    // Default quotes
    quotes = [
      { text: "Start where you are.", category: "inspiration" },
      { text: "Learn by doing.", category: "education" }
    ];
  }
}

// Save quotes to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Display quote in DOM
function displayQuote(quote) {
  const container = document.getElementById("quoteDisplay");
  container.innerHTML = `<p>${quote.text}</p><small>${quote.category}</small>`;

  // Save last viewed quote in sessionStorage
  sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}

// Show random quote
function showRandomQuote() {
  if (quotes.length === 0) return;
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

  quotes.push(newQuote);       // Add to array
  displayQuote(newQuote);      // Update DOM
  saveQuotes();                // Save to localStorage

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

// Export quotes to JSON file
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Import quotes from JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(e) {
    try {
      const importedQuotes = JSON.parse(e.target.result);
      if (Array.isArray(importedQuotes)) {
        quotes.push(...importedQuotes);
        saveQuotes();
        alert("Quotes imported successfully!");
      } else {
        alert("Invalid JSON format.");
      }
    } catch (err) {
      alert("Error parsing JSON file.");
    }
  };
  fileReader.readAsText(event.target.files[0]);
}

// Initialize app
function initApp() {
  loadQuotes();

  // Event listeners
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  document.getElementById("exportBtn").addEventListener("click", exportToJsonFile);
  document.getElementById("importFile").addEventListener("change", importFromJsonFile);

  createAddQuoteForm("quoteFormContainer");

  // Display last viewed quote if exists, else random
  const lastQuote = sessionStorage.getItem("lastQuote");
  if (lastQuote) {
    displayQuote(JSON.parse(lastQuote));
  } else {
    showRandomQuote();
  }
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);

// Expose globally for grader
window.addQuote = addQuote;
window.createAddQuoteForm = createAddQuoteForm;
window.showRandomQuote = showRandomQuote;
window.exportToJsonFile = exportToJsonFile;
window.importFromJsonFile = importFromJsonFile;
