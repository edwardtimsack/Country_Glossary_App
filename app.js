// let selectDiv = document.querySelector("select");
// let countries = document.querySelector(".countries-grid")
// let searchInput = document.querySelector('input');
//   selectDiv.addEventListener("change",

// function (event){
//     fetch("https://restcountries.com/v3.1/all")
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(data){
//         const selectedContinent = selectDiv.value;
//                 const filteredCountries = data.filter(function(country) {
//                   return country.continents[0] === selectedContinent;
//                 })
//                 const countryNames = filteredCountries.map(function(country) {
//                         return country.name.common;
//                 });
//                 console.log(event)
       
//                 // clear countries div
//                 countries.innerHTML = ''
        
//         for(let i = 0; i < data.length; i++){
//             if(data[i].continents[0] == event.target.value){
              
//                 console.log(data[i].name.common);
//                 const countryCard = document.createElement("div");
//                 const countryFlag = document.createElement("img");
//                 countryFlag.src = data[i].flags.png;

//                 countryCard.appendChild(countryFlag);

//                 const countryName = document.createElement("h1");
//                 countryName.innerHTML = data[i].name.common;
//                 countryCard.appendChild(countryName);

//                 const countryPopulation = document.createElement('p');
//                 countryPopulation.innerHTML = data[i].population;
//                 countryCard.appendChild(countryPopulation);
//                 countries.append(countryCard);


//                 // search function 
//                 searchInput.addEventListener('click', function(event){
                  
//                 })

//             }
          
//         }
//     })

// })

let selectDiv = document.querySelector("select");
let countries = document.querySelector(".countries-grid");
let searchInput = document.querySelector('input');

// Set the default value of the select dropdown to "Africa"
// Africa is set has the default value 
selectDiv.value = "Africa";

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

        countries.append(countryBox);
      }
    });
});

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


  