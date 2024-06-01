document.addEventListener("DOMContentLoaded", function () {
    const supplierSelect = document.getElementById("supplier");
    const submitBtn = document.getElementById("submitBtn");
    const clearBtn = document.getElementById("clearBtn");
    const message = document.getElementById("message");

        // Fetch the suppliers data from the Flask route
    fetch('/get_suppliers')
        .then(response => response.json())
        .then(data => {
            const dropdown = document.getElementById('supplierDropdown');
            data.forEach(supplier => {
                const option = document.createElement('option');
                option.value = supplier.id;
                option.text = supplier.name;
                dropdown.add(option);
            });
        })
        .catch(error => console.error('Error fetching suppliers:', error));

    // Handle form submission
    submitBtn.addEventListener("click", function () {
        const itemName = document.getElementById("itemName").value;
        const itemDescription = document.getElementById("itemDescription").value;
        const supplier = document.getElementById("supplier").value;
        const partNumber = document.getElementById("partNumber").value;
        const quantity = document.getElementById("quantity").value;

        fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemName,
                itemDescription,
                supplier,
                partNumber,
                quantity
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    message.textContent = "Item saved successfully!";
                    document.getElementById("inventoryForm").reset();
                } else {
                    message.textContent = "Failed to save item.";
                }
            });
    });



    // Handle form clearing
    clearBtn.addEventListener("click", function () {
        document.getElementById("inventoryForm").reset();
        message.textContent = "";
    });
});
