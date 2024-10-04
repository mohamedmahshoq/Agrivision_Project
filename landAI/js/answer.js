// Full CSV data as an array of objects
const soilData = [
    { SoilType: "Alluvial Soil", Crop: "Rice", WaterRequirement: 70, Yield: 30, Profit: 25, CommonDiseases: "Blast", Remedies: "Use fungicide", BestCrop: "Rice", SoilDescription: "Fertile soil rich in minerals, with good water retention.", StepsToPlant: "1. Level the land. 2. Prepare seedbeds. 3. Transplant seedlings. 4. Maintain water levels. 5. Apply fertilizers." },
    { SoilType: "Alluvial Soil", Crop: "Wheat", WaterRequirement: 50, Yield: 25, Profit: 30, CommonDiseases: "Rust", Remedies: "Use resistant varieties", BestCrop: "Rice", SoilDescription: "Fertile soil rich in minerals, with good water retention.", StepsToPlant: "1. Prepare the soil by plowing. 2. Sow seeds evenly. 3. Irrigate lightly. 4. Weed control. 5. Apply fertilizers." },
    { SoilType: "Alluvial Soil", Crop: "Sugarcane", WaterRequirement: 150, Yield: 70, Profit: 40, CommonDiseases: "Red Rot", Remedies: "Use healthy seeds", BestCrop: "Rice", SoilDescription: "Fertile soil rich in minerals, with good water retention.", StepsToPlant: "1. Deep plowing of the field. 2. Use healthy cane setts for planting. 3. Irrigate regularly. 4. Apply fertilizers and pest control." },
    { SoilType: "Alluvial Soil", Crop: "Maize", WaterRequirement: 40, Yield: 55, Profit: 35, CommonDiseases: "Leaf Blight", Remedies: "Use resistant varieties", BestCrop: "Rice", SoilDescription: "Fertile soil rich in minerals, with good water retention.", StepsToPlant: "1. Prepare seedbeds. 2. Sow seeds with proper spacing. 3. Ensure moderate irrigation. 4. Weed management. 5. Apply pest control and fertilizers." },
    { SoilType: "Alluvial Soil", Crop: "Pulses", WaterRequirement: 35, Yield: 18, Profit: 25, CommonDiseases: "Rust", Remedies: "Fungicide spray", BestCrop: "Rice", SoilDescription: "Fertile soil rich in minerals, with good water retention.", StepsToPlant: "1. Plow the land well. 2. Sow seeds directly. 3. Water lightly. 4. Apply organic fertilizers. 5. Weed control." },

    { SoilType: "Red Soil", Crop: "Sorghum", WaterRequirement: 30, Yield: 25, Profit: 28, CommonDiseases: "Leaf Blight", Remedies: "Use resistant varieties", BestCrop: "Sorghum", SoilDescription: "Well-drained, slightly acidic soil, with low organic content.", StepsToPlant: "1. Plow the soil. 2. Sow seeds with proper spacing. 3. Irrigate sparingly. 4. Apply organic fertilizers. 5. Weed control." },
    { SoilType: "Red Soil", Crop: "Groundnut", WaterRequirement: 40, Yield: 18, Profit: 32, CommonDiseases: "Rust", Remedies: "Fungicide spray", BestCrop: "Sorghum", SoilDescription: "Well-drained, slightly acidic soil, with low organic content.", StepsToPlant: "1. Prepare well-drained seedbeds. 2. Plant seeds 2 inches deep. 3. Irrigate moderately. 4. Apply pest control. 5. Harvest after 120 days." },
    { SoilType: "Red Soil", Crop: "Cotton", WaterRequirement: 45, Yield: 15, Profit: 35, CommonDiseases: "Bollworm", Remedies: "Pesticide application", BestCrop: "Sorghum", SoilDescription: "Well-drained, slightly acidic soil, with low organic content.", StepsToPlant: "1. Deep plowing of the land. 2. Sow seeds with proper spacing. 3. Water lightly. 4. Apply fertilizers and pesticides regularly." },
    { SoilType: "Red Soil", Crop: "Millets", WaterRequirement: 25, Yield: 20, Profit: 27, CommonDiseases: "Blast", Remedies: "Use resistant seeds", BestCrop: "Sorghum", SoilDescription: "Well-drained, slightly acidic soil, with low organic content.", StepsToPlant: "1. Prepare the soil. 2. Sow seeds evenly. 3. Light irrigation. 4. Use organic fertilizers. 5. Weed management." },
    { SoilType: "Red Soil", Crop: "Sunflower", WaterRequirement: 60, Yield: 12, Profit: 33, CommonDiseases: "Downy Mildew", Remedies: "Disease-free seeds", BestCrop: "Sorghum", SoilDescription: "Well-drained, slightly acidic soil, with low organic content.", StepsToPlant: "1. Prepare seedbeds. 2. Sow seeds 1-2 inches deep. 3. Irrigate moderately. 4. Apply fertilizers. 5. Harvest after 80 days." },

    { SoilType: "Black Soil", Crop: "Cotton", WaterRequirement: 50, Yield: 12, Profit: 37, CommonDiseases: "Bollworm", Remedies: "Pesticide application", BestCrop: "Cotton", SoilDescription: "Fertile, clay-rich soil, excellent water retention, suitable for deep-rooted crops.", StepsToPlant: "1. Deep plowing of the soil. 2. Sow seeds with wide spacing. 3. Irrigate lightly. 4. Apply fertilizers and pesticides regularly." },
    { SoilType: "Black Soil", Crop: "Soybean", WaterRequirement: 35, Yield: 20, Profit: 28, CommonDiseases: "Rust", Remedies: "Fungicide spray", BestCrop: "Cotton", SoilDescription: "Fertile, clay-rich soil, excellent water retention, suitable for deep-rooted crops.", StepsToPlant: "1. Plow and prepare the soil. 2. Plant seeds 1-2 inches deep. 3. Water moderately. 4. Apply organic fertilizers and pest control." },
    { SoilType: "Black Soil", Crop: "Maize", WaterRequirement: 40, Yield: 55, Profit: 35, CommonDiseases: "Leaf Blight", Remedies: "Use resistant varieties", BestCrop: "Cotton", SoilDescription: "Fertile, clay-rich soil, excellent water retention, suitable for deep-rooted crops.", StepsToPlant: "1. Prepare seedbeds. 2. Sow seeds with proper spacing. 3. Irrigate moderately. 4. Apply fertilizers and weed control." },
    { SoilType: "Black Soil", Crop: "Pulses", WaterRequirement: 30, Yield: 16, Profit: 22, CommonDiseases: "Anthracnose", Remedies: "Fungicide spray", BestCrop: "Cotton", SoilDescription: "Fertile, clay-rich soil, excellent water retention, suitable for deep-rooted crops.", StepsToPlant: "1. Plow the soil. 2. Sow seeds directly. 3. Water lightly. 4. Apply organic fertilizers. 5. Weed management." },
    { SoilType: "Black Soil", Crop: "Sunflower", WaterRequirement: 45, Yield: 15, Profit: 33, CommonDiseases: "Downy Mildew", Remedies: "Disease-free seeds", BestCrop: "Cotton", SoilDescription: "Fertile, clay-rich soil, excellent water retention, suitable for deep-rooted crops.", StepsToPlant: "1. Prepare seedbeds. 2. Sow seeds 1-2 inches deep. 3. Irrigate lightly. 4. Use fertilizers. 5. Harvest after 80-100 days." },

    { SoilType: "Arid/Desert Soil", Crop: "Bajra", WaterRequirement: 30, Yield: 25, Profit: 27, CommonDiseases: "Downy Mildew", Remedies: "Disease-free seeds", BestCrop: "Bajra", SoilDescription: "Sandy soil with poor water retention, prone to erosion.", StepsToPlant: "1. Plow the soil shallowly. 2. Sow seeds evenly. 3. Irrigate sparingly. 4. Apply organic fertilizers. 5. Weed management." },
    { SoilType: "Arid/Desert Soil", Crop: "Barley", WaterRequirement: 20, Yield: 22, Profit: 25, CommonDiseases: "Rust", Remedies: "Use resistant varieties", BestCrop: "Bajra", SoilDescription: "Sandy soil with poor water retention, prone to erosion.", StepsToPlant: "1. Shallow plowing. 2. Sow seeds with wide spacing. 3. Water lightly. 4. Weed control. 5. Apply fertilizers." },
    { SoilType: "Arid/Desert Soil", Crop: "Millets", WaterRequirement: 25, Yield: 18, Profit: 23, CommonDiseases: "Blast", Remedies: "Use resistant seeds", BestCrop: "Bajra", SoilDescription: "Sandy soil with poor water retention, prone to erosion.", StepsToPlant: "1. Prepare seedbeds. 2. Sow seeds evenly. 3. Irrigate lightly. 4. Use organic fertilizers. 5. Harvest after 90-100 days." },
    { SoilType: "Arid/Desert Soil", Crop: "Sorghum", WaterRequirement: 30, Yield: 20, Profit: 30, CommonDiseases: "Leaf Blight", Remedies: "Use resistant varieties", BestCrop: "Bajra", SoilDescription: "Sandy soil with poor water retention, prone to erosion.", StepsToPlant: "1. Plow the soil. 2. Sow seeds evenly. 3. Light irrigation. 4. Apply organic fertilizers. 5. Weed management." },
    { SoilType: "Arid/Desert Soil", Crop: "Chickpeas", WaterRequirement: 40, Yield: 16, Profit: 20, CommonDiseases: "Anthracnose", Remedies: "Fungicide spray", BestCrop: "Bajra", SoilDescription: "Sandy soil with poor water retention, prone to erosion.", StepsToPlant: "1. Prepare the soil. 2. Sow seeds directly. 3. Water lightly. 4. Apply organic fertilizers. 5. Harvest after 90 days." }
];

// Retrieve selected soil type from local storage
const soilType = localStorage.getItem("soilType");
const recommendationsContainer = document.getElementById("recommendations");

// Find matching data from CSV
const matchingData = soilData.filter(data => data.SoilType === soilType);

// Display results
if (matchingData.length > 0) {
    matchingData.forEach(data => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${data.Crop}</h3>
            <p><strong>Water Requirement:</strong> ${data.WaterRequirement} mm</p>
            <p><strong>Yield:</strong> ${data.Yield} kg/cent</p>
            <p><strong>Profit:</strong> $${data.Profit}/cent</p>
            <p><strong>Common Diseases:</strong> ${data.CommonDiseases}</p>
            <p><strong>Remedies:</strong> ${data.Remedies}</p>
            <p><strong>Best Crop:</strong> ${data.BestCrop}</p>
            <p><strong>Soil Description:</strong> ${data.SoilDescription}</p>
            <p><strong>Steps to Plant:</strong> ${data.StepsToPlant}</p>
        `;
        recommendationsContainer.appendChild(card);
    });
} else {
    recommendationsContainer.innerHTML = "<p>No recommendations available for this soil type.</p>";
}

// Connect Farmers button functionality
document.getElementById("connect-farmers").addEventListener("click", function() {
    window.location.href = "farmer.html";
});
document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
});