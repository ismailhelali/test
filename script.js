// Sample products array (replace this with your actual data from File.js)
const products = [
    {
        date: '08/16/2023',
        type: 'LC',
        client: '7TH GARDEN ICE:003051951000084',
        name: 'Vinaigre blanc PIK 50 cl',
        quantity: 26
    },
    // Add more product objects here
];

// Function to populate the client dropdown
function populateClientDropdown() {
    const clientDropdown = document.getElementById('clientDropdown');
    const clients = [...new Set(products.map(product => product.client))]; // Get unique clients

    // Create options for each client
    clients.forEach(client => {
        const option = document.createElement('option');
        option.value = client;
        option.textContent = client;
        clientDropdown.appendChild(option);
    });
}

// Function to display products based on selected client
function displayProducts() {
    const selectedClient = document.getElementById('clientDropdown').value;
    const productListDiv = document.getElementById('productList');
    
    if (!selectedClient) {
        productListDiv.innerHTML = ''; // Clear the product list
        return;
    }

    const filteredProducts = products.filter(product => product.client === selectedClient);

    // Create an HTML list to display products
    const productListHTML = filteredProducts.map(product => `
        <div class="product">
            <p>Date: ${product.date}</p>
            <p>Type: ${product.type}</p>
            <p>Name: ${product.name}</p>
            <p>Quantity: ${product.quantity}</p>
        </div>
    `).join('');

    productListDiv.innerHTML = productListHTML;
}

// Populate the client dropdown when the page loads
populateClientDropdown();
