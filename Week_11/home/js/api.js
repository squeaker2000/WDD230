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
        let image = document.createElement('img');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let avgRain = document.createElement('p');
        // let events = document.createElement('p');

        if (i == 0 || i == 2 || i == 6)
        {
          h2.textContent = towns[i].name;
          if (i == 0)
          {
            // section.setAttribute('id','card-1')
            image.src = 'images/soda_springs.jpg';
          }
          else if (i == 2)
          {
            // section.setAttribute('id','card-2')
            image.src = 'images/fish_haven.jpg';
          }
          else if (i == 6)
          {
            // section.setAttribute('id','card-3')
            image.src = 'images/preston.jpg';
          }
          motto.textContent = towns[i].motto;
          yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
          population.textContent = 'Population: ' + towns[i].population;
          avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        }
        else if (i == 1 || i == 3 || i == 4 || i == 5)
        {
          ;
        }
        

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