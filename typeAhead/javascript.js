const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
//or we can use cities = data
// console.log(cities);

function getDataFromCities(whatToSearch,cities){
    
    return cities.filter(placeArr => {
        const regex = new RegExp(whatToSearch,'gi');
        return  placeArr.city.match(regex) || placeArr.state.match(regex);
    })
}

function getAllData() {
    console.log(this.value);
    const matchArray = getDataFromCities(this.value,cities);
    console.log(matchArray);

    const html = matchArray.map(place => {
        const regex = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regex,`<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class='hl'>${this.value}</span>`)
         return `
            <li>
                <span>${cityName},${stateName}</span>
                <span class='population'>${numberWithCommas(place.population)}</span>
            </li>
         `;
    }).join('');

    
    suggestions.innerHTML = html;
    
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

const input = document.querySelector('.input-text');
const suggestions = document.querySelector('.suggestions');

input.addEventListener('click',getAllData);
input.addEventListener('keyup',getAllData);
