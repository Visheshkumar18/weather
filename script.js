const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('.weather-box');
const weatherdetails=document.querySelector('.weather-details');
const error=document.querySelector('.not-found');
search.addEventListener('click',()=> {
    const APIKEY='73b261b0e7025e871614d460875e1cb9';
    const city=document.querySelector('.search-box input').value;
    if(city=="")
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`).then(response => response.json()).then(json=>{
               if(json.cod=='404'){
                    container.style.height="400px";
                    weatherBox.classList.remove('active');
                    weatherdetails.classList.remove('active');
                    error.classList.add('active');
                    return;
               }
               container.style.height="555px";
               weatherBox.classList.add('active');
               weatherdetails.classList.add('active');
               error.classList.remove('active');
            const image=document.querySelector('.weather-box img');
            const temperature=document.querySelector('.weather-box .temp');
            const description=document.querySelector('.weather-box .description');
            const humidity=document.querySelector('.weather-details .humidity span');
            const wind=document.querySelector('.weather-details .wind span');
            switch(json.weather[0].main){
            case 'Clear':
               image.src = 'image/clear.png';
                break;
           case 'Rain':
           image.src = 'image/rain.png';
                break;
           case 'Clouds':
                image.src = 'image/cloud.png';
                break;
           case 'Mist':
                image.src = 'image/mist.png';
                break;
           case 'Haze':
                image.src = 'image/mist.png';
                break;
           default:
                image.src = 'image/cloud.png';
                break;
                     }
          temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
          description.innerHTML=`${(json.weather[0].description)}`;
          humidity.innerHTML = `${json.main.humidity.toString()}%`;
          wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
    });
    
});
