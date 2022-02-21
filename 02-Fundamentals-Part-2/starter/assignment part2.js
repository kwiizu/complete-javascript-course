
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const countryInfo = describeCountry('Sweden', 10, 'Stockholm');
console.log(countryInfo);


const describeCountry2 = function (country, population, capitalCity) {
    console.log(`${country} has ${population} million people and it's capital city is ${capitalCity}`)
}
const countryInfo2 = describeCountry2
countryInfo2('Finland', 55, 'helsinki');
