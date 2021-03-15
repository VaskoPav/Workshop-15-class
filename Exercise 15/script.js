// CountrySearch

const countriesList = document.getElementById("countries");
let countries; 

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  
  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);
  
  countriesList.innerHTML = options;
  
  countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  document.getElementById("capital").innerHTML = countryData.capital;
  
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");

}



// Olympic Games class

class OlympicGames {
    constructor(location = `not defined`, numberOfSportsGames = `not defined`, countriesThatContest = `not defined`, dateFrom = `not defined`, dateTo = `not defined`, numberOfPeople = 0, listOfSports = `not defined`) {
        this.location = location;
        this.numberOfSportsGames = numberOfSportsGames;
        this.countriesThatContest = countriesThatContest;

        this.dateFrom = dateFrom;
        this.dateTo = dateTo;

        this.duration = this.dateTo.getTime() - this.dateFrom.getTime();

        this.numberOfPeople = numberOfPeople;
        this.listOfSports = listOfSports;
    }

    changeSportsList = (newSportsList) => {
        this.listOfSports = newSportsList;
    }

    changeDuration = (fromDate, toDate) => {
        this.dateFrom = fromDate;
        this.dateTo = toDate;
        this.duration = toDate.getTime() - fromDate.getTime();
    }

    changeNumberOfSportsGames = (number) => {
        this.numberOfSportsGames = number;
    }

    changeListOfCountries = (countries) => {
        this.countriesThatContest = countries;
    }

    changeNumberOfPeople = (number) => {
        this.numberOfPeople = number;
    }
}





