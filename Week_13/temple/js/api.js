const requestURL = 'https://nathan-byui-api.herokuapp.com/temples/{temple_id}';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    let filteredTowns = towns;
    if (towns.length === 7) {
      filteredTowns = [towns[0], towns[2], towns[6]];
    }

    for (let i = 0; i < filteredTowns.length; i++) {
      if (towns.length === 7) {
        filteredTowns = [towns[0], towns[2], towns[6]];
      }
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let avgRain = document.createElement('p');
        // let events = document.createElement('p');

        h2.textContent = towns[i].name;
        image.src = 'images/preston.jpg';
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].population;
        avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

        /* if (i == 0)
        {
        h2.textContent = towns[i].name;
        image.src = 'images/soda_springs.jpg';
          motto.textContent = towns[i].motto;
          yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
          population.textContent = 'Population: ' + towns[i].population;
          avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        }
        // else if (i == 2)
        {
          h2.textContent = towns[i].name;
          image.src = 'images/fish_haven.jpg';
          motto.textContent = towns[i].motto;
          yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
          population.textContent = 'Population: ' + towns[i].population;
          avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        }
        else if (i == 1)
        {
          h2.textContent = towns[i].name;
          image.src = 'images/preston.jpg';
          motto.textContent = towns[i].motto;
          yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
          population.textContent = 'Population: ' + towns[i].population;
          avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        }
        else
        {
          ;
        }*/
          // motto.textContent = towns[i].motto;
          //  yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
          // population.textContent = 'Population: ' + towns[i].population;
          // avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        

        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(population);
        card.appendChild(avgRain);
        // card.appendChild(events);

        document.querySelector('div.cards').appendChild(card);        
    }
  });