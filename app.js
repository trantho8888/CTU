let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('.form');
let main = document.querySelector('main');
document.addEventListener('DOMContentLoaded', function() {  
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        if(valueSearch.value != ''){
            searchWeather();
        }
    })
});
let id = 'c585b4d6174ab8e01ce49a5c0f2ccc2b';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () =>{
    fetch(url + '&q=' +valueSearch.value)
    .then (reponsive => reponsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src= 'https://flagsapi.com/'+data.sys.country+'/flat/64.png';
            
            temperature.querySelector('img').src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temperature.querySelector('figcaption span').innerText  = data.main.temp;  
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;        
            }
            else{
                main.classList.add('erro');
                setTimeout(() => {
                    main.classList.remove('erro');
                },1000);
        }
        
        valueSearch.value = '';
        
    
    })
}


const initApp = () => {
    valueSearch.value = 'Washington';
    searchWeather();
}
initApp();


