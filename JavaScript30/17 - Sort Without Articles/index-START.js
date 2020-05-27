
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort(function(a, b) {
    // Return 1 left hand side (a) is greater, -1 if not greater.
    return a.replace(/^(a |an |the )/i, '') > b.replace(/^(a |an |the )/i, '') ? 1 : -1;


 });

bands1 = document.getElementById('bands').innerHTML =
    bands
        .map(band => `<li>${band}</li>`)
        .join('');


console.log(bands1)
