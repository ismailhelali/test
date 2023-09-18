// script.js
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const productList = document.getElementById('product-list');

  // Function to filter and display products
  function displayFilteredProducts(query) {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.client.toLowerCase().includes(query.toLowerCase())
    );

    productList.innerHTML = ''; // Clear existing product list

    if (filteredProducts.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
    } else {
      filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <h2>${product.name}</h2>
          <p>Date: ${product.date}</p>
          <p>Type: ${product.type}</p>
          <p>Client: ${product.client}</p>
          <p>Quantity: ${product.quantity}</p>
        `;
        productList.appendChild(productDiv);
      });
    }
  }

  // Event listener for search input
  searchInput.addEventListener('input', function () {
    displayFilteredProducts(searchInput.value);
  });

  // Initial display of all products
  displayFilteredProducts('');
});
