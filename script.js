// Initial quotes array
let quotes = [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Do one thing every day that scares you.", category: "Motivation" },
  { text: "Success is not final, failure is not fatal.", category: "Wisdom" }
];

// Show random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  const { text, category } = quotes[randomIndex];
  quoteDisplay.innerHTML = `<p>"${text}"</p><small>— ${category}</small>`;
}

// Add new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (newText && newCategory) {
    quotes.push({ text: newText, category: newCategory });
    textInput.value = "";
    categoryInput.value = "";
    alert("Quote added successfully!");
  } else {
    alert("Please fill in both fields.");
  }
}

// Event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Show first quote on load
showRandomQuote();
// Sample quotes array
let quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Don't watch the clock; do what it does. Keep going.", category: "Inspiration" }
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex].text;
}

// Function to add a new quote
function addQuote(text, category) {
    quotes.push({ text, category });
    displayRandomQuote(); // Update DOM after adding
}

// Function to create Add Quote form dynamically
function createAddQuoteForm() {
    const form = document.createElement("form");

    const quoteInput = document.createElement("input");
    quoteInput.type = "text";
    quoteInput.placeholder = "Enter quote";
    form.appendChild(quoteInput);

    const categoryInput = document.createElement("input");
    categoryInput.type = "text";
    categoryInput.placeholder = "Enter category";
    form.appendChild(categoryInput);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Add Quote";
    form.appendChild(submitBtn);

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (quoteInput.value && categoryInput.value) {
            addQuote(quoteInput.value, categoryInput.value);
            quoteInput.value = "";
            categoryInput.value = "";
        }
    });

    document.body.appendChild(form);
}

// Event listener for “Show New Quote” button
document.getElementById("new-quote-btn").addEventListener("click", displayRandomQuote);

// Initialize
createAddQuoteForm();
displayRandomQuote();
