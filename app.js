const API_KEY = "e49added2d6669945401ac33bdbde47f";

const searchBarBtn = document.getElementById("searchBarButton");

searchBar.addEventListener('keydown', (e)=> {
  if(e.key ==='Enter') {
    const searchBar = document.getElementById("searchBar");
  const cityHeading = document.getElementById("city");

  const tempHeading = document.getElementById("temp");

  const city = searchBar.value;

  let degreeCelsius = String.fromCodePoint(8451);

  let data = fetchData(city).then((response) => {
    cityHeading.innerText = response.name;
    tempHeading.innerText = response.main.temp + degreeCelsius;
  });
  }
})

searchBarBtn.addEventListener("click", () => {
  const searchBar = document.getElementById("searchBar");
  const cityHeading = document.getElementById("city");

  const tempHeading = document.getElementById("temp");

  const city = searchBar.value;

  let degreeCelsius = String.fromCodePoint(8451);

  let data = fetchData(city).then((response) => {
    cityHeading.innerText = response.name;
    tempHeading.innerText = response.main.temp + degreeCelsius;
  });
});

function fetchData(city) {
  let dataTwo = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      return "Fetch error";
    });

  return dataTwo;
}

let temp;
let city;

let data = fetchData("Ajmer").then((response) => {
  city = response.name;
  temp = response.main.temp;

  printCityAndName(city, temp);
});

function printCityAndName(city, temp) {}
