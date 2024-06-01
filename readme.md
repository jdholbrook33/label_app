# Inventory Data Entry Form

## Project Description

This project is a web-based form that allows users to input data about items in inventory and save that data to a CSV file. The "Supplier" field in the form will be populated by reading a JSON file that contains the list of suppliers. The project utilizes HTML, CSS, JavaScript, Python, and Flask.

## Features

- Web form for inventory data entry
- Dynamic "Supplier" field populated from a JSON file
- Data saving functionality to a CSV file
- Backend support using Python and Flask

## Technologies Used

- HTML
- CSS
- JavaScript
- Python
- Flask

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/inventory-form.git
    cd inventory-form
    ```

2. **Create and activate a virtual environment:**
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required packages:**
    ```sh
    pip install -r requirements.txt
    ```

4. **Run the Flask application:**
    ```sh
    flask run
    ```

## Usage

1. **Open your browser and navigate to:**
    ```
    http://127.0.0.1:5000
    ```

2. **Fill in the inventory form and submit:**

    - Item Name
    - Quantity
    - Price
    - Supplier (populated from JSON file)

3. **The data will be saved to a CSV file in the project directory.**

## Project Structure

inventory-form/
├── static/
│ ├── css/
│ │ └── styles.css
│ └── js/
│ └── scripts.js
├── templates/
│ └── index.html
├── data/
│ └── suppliers.json
├── app.py
├── requirements.txt
└── README.md


## JSON File Format

The `suppliers.json` file should be structured as follows:

```json
{
    "suppliers": [
        "Supplier A",
        "Supplier B",
        "Supplier C"
    ]
}
