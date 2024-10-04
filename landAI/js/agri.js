function showMap() {
    const location = document.getElementById('location').value;
    const mapContainer = document.getElementById('map-container');

    const maps = {
        nagercoil: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63188.989810475025!2d77.37383239503488!3d8.171303015971423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0dfc0ddc7b7%3A0x809a9e32a95d3ed1!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726924389871!5m2!1sen!2sin" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        kanniyakumari: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15800.591347832782!2d77.5355706941207!3d8.086401871070773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed3d2a087861%3A0x1e790e896aeffaa0!2sKanniyakumari%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726924439701!5m2!1sen!2sin" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        thuckalay: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15794.330227178118!2d77.30848154414986!3d8.244661818616825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f8f967104d49%3A0xf94e65afb9bd4a0c!2sThuckalay%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726924466371!5m2!1sen!2sin" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        marthandam: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15791.82042602436!2d77.20933304416154!3d8.307260367647295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b045516f27e1797%3A0x9eaf4bffb1fa19c1!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726924489298!5m2!1sen!2sin" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    };

    mapContainer.innerHTML = maps[location] || '';
}

function confirmLocation() {
    document.getElementById('overlay').style.display = 'flex';
}

function proceed() {
    window.location.href = 'agtech.html';
}
