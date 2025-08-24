// Initial quotes
let quotes = [
  { text: "The best way to predict the future is to create it.", category: "Motivation" },
  { text: "Success is not in what you have, but who you are.", category: "Success" },
  { text: "Happiness depends upon ourselves.", category: "Happiness" }
];

// Display random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quoteDisplay").textContent = `"${quote.text}" - ${quote.category}`;

  // Save last viewed quote in sessionStorage
  sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}

// Populate categories dynamically
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");

  // Extract unique categories
  const categories = [...new Set(quotes.map(q => q.category))];

  // Remove all options except "All Categories"
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';

  // Add options
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });

  // Restore last selected category
  const savedCategory = localStorage.getItem("selectedCategory");
  if (savedCategory) {
    categoryFilter.value = savedCategory;
    filterQuote();
  }
}

// Filter quotes by selected category
function filterQuote() {
  const category = document.getElementById("categoryFilter").value;
  localStorage.setItem("selectedCategory", category);

  let filtered = (category === "all") ? quotes : quotes.filter(q => q.category === category);
  if (filtered.length > 0) {
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const quote = filtered[randomIndex];
    document.getElementById("quoteDisplay").textContent = `"${quote.text}" - ${quote.category}`;
  }
}

// Initialize on page load
window.onload = function() {
  populateCategories();

  // Restore last viewed quote
  const lastQuote = sessionStorage.getItem("lastQuote");
  if (lastQuote) {
    document.getElementById("quoteDisplay").textContent = JSON.parse(lastQuote).text;
  } else {
    displayRandomQuote();
  }
};
