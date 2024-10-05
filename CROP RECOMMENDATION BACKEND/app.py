from flask import Flask, request, jsonify, render_template
import pandas as pd

app = Flask(__name__)

# Load the crop recommendation data from the CSV file
def load_crop_data():
    try:
        
        data = pd.read_csv('crops.csv')
        return data
    except FileNotFoundError:
        return pd.DataFrame()  # Return an empty DataFrame if the file is not found

# Home route to render the HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Helper function to find the best match for the inputs
def find_best_match(soil_type, ph, rainfall, temperature):
    crops_data = load_crop_data()

    # Filter based on soil type first
    filtered_data = crops_data[crops_data['Soil Type'].str.lower() == soil_type.lower()]

    # Narrow down based on ranges of pH, Rainfall, and Temperature
    if not filtered_data.empty:
        filtered_data = filtered_data[
            (abs(filtered_data['pH'] - ph) <= 0.5) &  # Allowing some range for pH
            (abs(filtered_data['Rainfall (mm)'] - rainfall) <= 100) &  # Range for Rainfall
            (abs(filtered_data['Temperature (°C)'] - temperature) <= 2)  # Range for Temperature
        ]
    
    return filtered_data

# API route to recommend crops based on input data
@app.route('/recommend', methods=['POST'])
def recommend_crops():
    data = request.json
    
    soil_type = data.get('soil_type')
    ph = float(data.get('pH'))
    rainfall = int(data.get('rainfall'))
    temperature = int(data.get('temperature'))

    # Find the best match based on input
    recommendations = find_best_match(soil_type, ph, rainfall, temperature)

    if not recommendations.empty:
        recommended_crops = recommendations['Crop Recommended'].tolist()
        return jsonify({"recommended_crops": recommended_crops}), 200
    else:
        return jsonify({"error": "No recommendations found for the provided inputs."}), 404

if __name__ == '__main__':
    app.run(debug=True)
