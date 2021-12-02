const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let avgRain = document.createElement('p');
        // let events = document.createElement('p');

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].population;
        avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        

        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(population);
        card.appendChild(avgRain);
        // card.appendChild(events);

        document.querySelector('div.cards').appendChild(card);
        
    }
  });