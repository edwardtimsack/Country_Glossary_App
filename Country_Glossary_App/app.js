let selectDiv = document.querySelector("select");
let countries = document.querySelector(".countries-grid");
let searchInput = document.querySelector('input');
let county = document.querySelector(".countries-grid div")
let moreDetails = document.querySelector('.container');
let exitButton = document.querySelector('.exit svg');
let entireDocument = document.querySelector('main');
// Set the default value of the select dropdown to "Africa"
// Africa is set has the default value 
// selectDiv.value = "Africa";
exitButton.addEventListener('click', function(){
  moreDetails.style.display = 'none';
  countries.style.opacity = 1;

})

selectDiv.addEventListener("change", function(event) {
  fetch("https://restcountries.com/v3.1/all")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      const selectedContinent = selectDiv.value;
      const filteredCountries = data.filter(function(country) {
        return country.continents[0] === selectedContinent;
      });

      // Clear countries div
      countries.innerHTML = '';

      for (let i = 0; i < filteredCountries.length; i++) {
        const country = filteredCountries[i];

        const countryBox = document.createElement("div");
        const countryFlag = document.createElement("img");
        countryFlag.src = country.flags.png;
        countryBox.appendChild(countryFlag);

        const countryName = document.createElement("h1");
        countryName.innerHTML = country.name.common;
        countryBox.appendChild(countryName);

        const countryCapital = document.createElement('h4');
        countryCapital.innerHTML = country.capital;
        countryBox.appendChild(countryCapital);

        const countryPopulation = document.createElement('p');
        countryPopulation.innerHTML = `Population: ${data[i].population}`;
        countryBox.appendChild(countryPopulation);

        countryBox.addEventListener('click', function(){
          console.log('hello')
          moreDetails.style.display = 'block';
          // entireDocument.style.opacity = 0.0;
          countries.style.opacity = 0.5;


          let countryImg = document.querySelector('.flags')
          let countryNames = document.querySelector('.country_title');
          let countryCapitals = document.querySelector('.capital');
          let countryPopulations = document.querySelector('.population');
          let countryRegion = document.querySelector('.region');
          let countrySubRegion = document.querySelector('.sub_region');
          let countryLanguage = document.querySelector('.language');
          let countryTimeZone = document.querySelector('.time_zone')



          countryNames.innerHTML = country.name.common;
          countryImg.src = country.flags.png;
          countryCapitals.innerHTML = `Capital: ${country.capital}`;
          countryPopulations.innerHTML = `Population: ${data[i].population}`;
          countryRegion.innerHTML = `Region: ${data[i].region}`;
          countrySubRegion.innerHTML = `Sub-Region: ${data[i].subregion}`;
          // countryLanguage.innerHTML = `Language: ${data[i].language}`;
          countryTimeZone.innerHTML = `Time-Zone: ${data[i].timezones}`;

          // const countryCard = document.createElement('div');
    
        })
        countries.append(countryBox);
      }
    });
});

function showDetails(){

}

// Search function placeholder
searchInput.addEventListener('input', function(event) {
  const searchCounty = event.target.value.toLowerCase();
  const countryCards = countries.querySelectorAll("div");

  countryCards.forEach(function(card) {
    const countryName = card.querySelector("h1").innerHTML.toLowerCase();

    if (countryName.includes(searchCounty)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


  