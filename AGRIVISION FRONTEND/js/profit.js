document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const location = params.get('location');
    const density = params.get('density');

    const existingShops = {
        nagercoil: {
            high: ["Supermarkets", "Electronics", "Cafés", "Pharmacies", "Convenience Stores"],
            medium: ["Grocery Stores", "Boutiques", "Fitness Centers", "Daycare Centers", "Pet Supply Stores"],
            low: ["Agricultural Supply Stores", "Local Produce Markets", "General Stores", "Auto Repair Shops", "Building Materials Stores"]
        },
        kanniyakumari: {
            high: ["Cafés", "Pharmacies", "Supermarkets", "Convenience Stores", "Mobile Repair Shops"],
            medium: ["Fitness Centers", "Daycare Centers", "Home Improvement Stores", "Boutiques", "Pet Supply Stores"],
            low: ["General Stores", "Auto Repair Shops", "Local Produce Markets", "Hardware Stores", "Agricultural Supply Stores"]
        },
        marthandam: {
            high: ["Convenience Stores", "Restaurants", "Cafés", "Pharmacies", "Grocery Stores"],
            medium: ["Home Improvement Stores", "Boutiques", "Fitness Centers", "Daycare Centers", "Pet Supply Stores"],
            low: ["Local Produce Markets", "Hardware Stores", "General Stores", "Auto Repair Shops", "Agricultural Supply Stores"]
        },
        thuckalay: {
            high: ["Supermarkets", "Pharmacies", "Cafés", "Convenience Stores", "Mobile Repair Shops"],
            medium: ["Grocery Stores", "Electronics", "Fitness Centers", "Boutiques", "Daycare Centers"],
            low: ["Agricultural Supply Stores", "General Stores", "Auto Repair Shops", "Local Produce Markets", "Building Materials Stores"]
        }
    };

    const shopDescriptions = {
        "Supermarkets": "High foot traffic and a variety of products make supermarkets highly profitable in densely populated areas.",
        "Cafés": "Eateries offering quick, affordable, or trendy meals tend to do very well.",
        "Pharmacies": "Essential services like pharmacies are always in demand in busy urban centers.",
        "Electronics": "Stores selling mobile phones and gadgets can thrive in tech-savvy areas.",
        "Grocery Stores": "Family-oriented areas benefit from accessible, local grocery stores.",
        "Boutiques": "Depending on the style preferences of the area, smaller fashion outlets can attract steady business.",
        "Fitness Centers": "Community gyms support a healthy lifestyle.",
        "Daycare Centers": "Demand for daycare grows in family-oriented suburbs.",
        "Agricultural Supply Stores": "In low-density rural areas, shops offering tools and farming equipment can be profitable.",
        "Local Produce Markets": "Fresh, local produce tends to do well.",
        "General Stores": "One-stop shops often succeed in rural areas.",
        "Auto Repair Shops": "With fewer service options, these shops can be stable businesses.",
        "Convenience Stores": "Convenience stores attract regular customers with long hours.",
        "Mobile Repair Shops": "Increasing demand due to high smartphone usage.",
        "Pet Supply Stores": "Catering to the growing number of pet owners in suburban areas.",
        "Building Materials Stores": "Supplies for construction and home projects."
    };

    const resultContent = document.getElementById('result-content');

    // Display results based on location and density
    if (density && existingShops[location]) {
        const shopsToDisplay = existingShops[location][density];
        const existingShopsRandom = getRandomExistingShops(shopsToDisplay, 3); // Get 3 existing shops

        // Add all shops to the display
        shopsToDisplay.forEach(shop => {
            const shopItem = document.createElement('div');
            shopItem.classList.add('shop-item');
            shopItem.innerHTML = `<strong>${shop}</strong>
                                  <div class="shop-description">${shopDescriptions[shop]}</div>`;
            shopItem.onclick = () => handleShopClick(shop, existingShopsRandom);
            resultContent.appendChild(shopItem);
        });
    } else {
        resultContent.innerHTML = "<p>No shops found based on your selection.</p>";
    }

    function getRandomExistingShops(shops, count) {
        const existingShopsRandom = [];
        while (existingShopsRandom.length < count) {
            const randIndex = Math.floor(Math.random() * shops.length);
            const shop = shops[randIndex];
            if (!existingShopsRandom.includes(shop)) {
                existingShopsRandom.push(shop);
            }
        }
        return existingShopsRandom;
    }

    function handleShopClick(shop, existingShopsRandom) {
        if (existingShopsRandom.includes(shop)) {
            showOverlay(`${shop} already exists. Making profit might be competitive. Based on your skills, would you like to proceed?`);
        } else {
            window.location.href = `${shop.toLowerCase().replace(/\s+/g, '-')}.html`;
        }
    }

    function showOverlay(message) {
        document.getElementById('overlay-message').textContent = message;
        document.getElementById('overlay').style.display = 'flex';
    }

    document.getElementById('proceed-button').onclick = () => {
        const shopName = document.getElementById('overlay-message').textContent.split(' ')[0];
        window.location.href = `${shopName.toLowerCase().replace(/\s+/g, '-')}.html`;
    };

    document.getElementById('cancel-button').onclick = () => {
        document.getElementById('overlay').style.display = 'none';
    };
});
