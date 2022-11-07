temples = [103, 198, 109, 108];
temples.forEach((templeid) => {
  fetch(`https://nathan-byui-api.herokuapp.com/temples/${templeid}`, {
    headers: {
      apiKey:
        'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N',
    },
  })
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);

      let card = document.createElement('section');
      let image = document.createElement('img');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let p = document.createElement('h3');
      let p2 = document.createElement('h3');
      let p22 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let p5 = document.createElement('p');
      let ptext = document.createElement('h3');

      image.setAttribute('src', jsObject.imageurl);
      image.alt = jsObject.city;
      h2.textContent = jsObject.name;
      h3.textContent = 'Phone: ' + jsObject.phone;
      p.textContent = 'Address: ' + jsObject.address1;
      p2.textContent = 'Services: ';
      p22.textContent = jsObject.services[0];
      p3.textContent = jsObject.services[1];
      p4.textContent = jsObject.services[2];
      p5.textContent = jsObject.services[3];
      ptext.textContent = 'Closure Schedule';


      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p22);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(p5);
      card.appendChild(ptext)
      for (const key of Object.keys(jsObject.closures)) {
        console.log(jsObject.closures[key]);

        jsObject.closures[key].forEach((closure) => {
          console.log(closure);
          let p7 = document.createElement('p');
          p7.textContent =
            'Startdate: ' +
            closure.startdate +
            ' - ' +
            'Enddate: ' +
            closure.enddate;

          card.appendChild(p7);
        });
      }

      document.querySelector('div.cards').appendChild(card);
    });
});