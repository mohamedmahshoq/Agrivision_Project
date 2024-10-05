const farmers = {
    nagercoil: [
        { name: " Aravind Kumar", contact: "1234567890" },
        { name: " Divya Raj", contact: "0987654321" }
    ],
    kanniyakumari: [
        { name: "Vinoth Reddy", contact: "1111222233" },
        { name: " Kavitha Devi", contact: "3333444455" }
    ],
    thuckalay: [
        { name: " Suresh Kumar", contact: "6666777788" },
        { name: "Nisha Rani", contact: "9999000011" }
    ],
    marthandam: [
        { name: "Karthik Nair", contact: "5555666677" },
        { name: "Mahshoq", contact: "8888999900" }
    ]
};

const maps = {
    nagercoil: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63188.989810475025!2d77.37383239503488!3d8.171303015971423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0dfc0ddc7b7%3A0x809a9e32a95d3ed1!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726924389871!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    kanniyakumari: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15800.591347832782!2d77.5355706941207!3d8.086401871070773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed3d2a087861%3A0x1e790e896aeffaa0!2sKanniyakumari%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726924439701!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    thuckalay: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15794.330227178118!2d77.30848154414986!3d8.244661818616825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f8f967104d49%3A0xf94e65afb9bd4a0c!2sThuckalay%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726924466371!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    marthandam: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15791.82042602436!2d77.20933304416154!3d8.307260367647295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b045516f27e1797%3A0x9eaf4bffb1fa19c1!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726924489298!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
};

function loadFarmers() {
    const location = document.getElementById("location").value;
    const farmerList = document.getElementById("farmer-list");
    farmerList.innerHTML = '';

    if (farmers[location]) {
        farmers[location].forEach(farmer => {
            const farmerCard = document.createElement("div");
            farmerCard.classList.add("farmer-card");
            farmerCard.innerHTML = `
                <h2>${farmer.name}</h2>
                <p>Contact: ${farmer.contact}</p>
                <button onclick="showMap('${location}')">View Location Map</button>
            `;
            farmerList.appendChild(farmerCard);
        });
    } else {
        farmerList.innerHTML = '<p>No farmers found in this location.</p>';
    }
}

function showMap(location) {
    const overlay = document.getElementById('map-overlay');
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = maps[location];
    overlay.classList.add('show');
}

function closeOverlay() {
    document.getElementById('map-overlay').classList.remove('show');
}
document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
});
