const API_KEY = 'e49added2d6669945401ac33bdbde47f'

let data = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=jaipur&appid=${API_KEY}`).then(response=> console.log(response)).catch(error=>console.log('Error: ', error))

console.log(data);
