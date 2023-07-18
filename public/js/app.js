console.log('JavaScript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then(res => res.json()).then(data => console.log(data))

const url = 'http://api.weatherstack.com/current?access_key=8339d98d8a4cdb7ea090ee1c09855ccd&query=37.8267,-122.4233';


const inputVal = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')


const weatherForm = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    message1.textContent = `Temperature : Loading...`
    message2.textContent = `Weather : Loading...`
    
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value || 'Hyderabad'}&appid=baca9c932141ffc411892ac2ec4c522d&units=metric`;
    
    fetch(apiURL).then(res => res.json()).then(data => {
        console.log(data)
        message1.textContent = `Temperature : ${data.main.temp}`
        message2.textContent = `Weather : ${data?.weather[0]?.description}`
    }).catch(err => {
        message1.textContent = `Temperature : ${err}`
        message2.textContent = `Weather : ${err}`
    })
    // console.log(inputVal.value);

    // console.log(responseData)
    // console.log('submited')
})