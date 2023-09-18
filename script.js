document.addEventListener("DOMContentLoaded", function () {
    const retrieveDataButton = document.getElementById("retrieveDataButton");
    const clientSearchInput = document.getElementById("clientSearch");
    const searchClientButton = document.getElementById("searchClientButton");
    const clientList = document.getElementById("clientList");
    const data = []; // Array to store the retrieved data from file.js

    // Function to create a button for each client
    function createClientButton(clientName) {
        const button = document.createElement("button");
        button.textContent = clientName;
        button.addEventListener("click", () => filterClientsBy(clientName));
        return button;
    }

    // Function to display all client names
    function displayAllClients() {
        clientList.innerHTML = "";
        const clientNames = [...new Set(data.map((item) => item.client))];
        clientNames.forEach((clientName) => {
            const button = createClientButton(clientName);
            clientList.appendChild(button);
        });
    }

    // Function to filter clients by a specific client name
    function filterClientsBy(clientName) {
        const filtered = data.filter(
            (item) => item.client.toLowerCase().includes(clientName.toLowerCase())
        );
        displayFilteredClients(filtered);
    }

    // Function to display filtered clients
    function displayFilteredClients(filteredClientsArray) {
        clientList.innerHTML = "";
        filteredClientsArray.forEach((item) => {
            const button = createClientButton(item.client);
            clientList.appendChild(button);
        });
    }

    // Function to load data from file.js
    function loadDataFromFile() {
        // Replace 'file.js' with the actual path to your JavaScript file
        fetch("file.js")
            .then((response) => response.text())
            .then((fileContents) => {
                // Extract the 'products' array from the file contents
                const startIndex = fileContents.indexOf("[");
                const endIndex = fileContents.lastIndexOf("]") + 1;
                const productsArray = JSON.parse(fileContents.substring(startIndex, endIndex));
                data.push(...productsArray);

                // Display all client names initially
                displayAllClients();
            })
            .catch((error) => console.error("Error loading data:", error));
    }

    // Event listener for the "Retrieve Data" button
    retrieveDataButton.addEventListener("click", () => {
        loadDataFromFile();
        retrieveDataButton.disabled = true;
    });

    // Event listener for the "Search" button
    searchClientButton.addEventListener("click", () => {
        const clientName = clientSearchInput.value.trim();
        if (clientName === "") {
            displayAllClients();
        } else {
            filterClientsBy(clientName);
        }
    });
});
