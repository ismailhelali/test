// Fetch the product data from the external file "products.js"
fetch('products.js')
  .then(response => response.json())
  .then(products => {
    const productTable = document.getElementById('productTable');
    const tbody = productTable.getElementsByTagName('tbody')[0];

    // Loop through the products and add rows to the table
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.date}</td>
        <td>${product.type}</td>
        <td>${product.client}</td>
        <td>${product.name}</td>
        <td>${product.quantity}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
