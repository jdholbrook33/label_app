from flask import Flask, render_template, request, jsonify
import csv
import os
import json

app = Flask(__name__, static_folder='static', template_folder='templates')

CSV_FILE = 'inventory.csv'
CSV_HEADER = ['Item Name', 'Item Description', 'Supplier', 'Part Number', 'Quantity in Stock']

# Load the suppliers.json data
with open('suppliers.json') as f:
    suppliers = json.load(f)

@app.route('/')
def index():
    return render_template('index.html')

def write_to_csv(data):
    file_exists = os.path.isfile(CSV_FILE)
    with open(CSV_FILE, mode='a', newline='') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(CSV_HEADER)
        writer.writerow([data['itemName'], data['itemDescription'], data['supplier'], data['partNumber'], data['quantity']])

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    try:
        write_to_csv(data)
        return jsonify(success=True)
    except Exception as e:
        print(e)
        return jsonify(success=False)

@app.route('/get_suppliers')
def get_suppliers():
    return jsonify(suppliers)

if __name__ == '__main__':
    app.run(debug=True)
