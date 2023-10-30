const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey="06e94c8da31cb9c45e16211ea4a59de6"
const searchbtn=document.querySelector(".sbox");
const searchbox=document.querySelector(".search-bar");
const weathericon=document.querySelector(".weather-icon");
const timeE=document.querySelector(".time");
const dateE=document.querySelector(".day-date");


// console.log(dateE);
const days=['sunday','monday','tuesday','wednesdsay','thursday','friday','saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
setInterval(()=>{
    const time=new Date();
    const date=time.getDate();
    const day=time.getDay();
    const month=time.getMonth();
    const hour=time.getHours();
    const minutes=time.getMinutes();
    const year=time.getFullYear();
    const m=minutes<10? '0'+minutes:minutes;
    const hoursin12hourformat=hour>=13? hour%12:hour;
    const ampm=hour>=12? 'PM':'AM';
    timeE.innerHTML=hoursin12hourformat + ':' + m+ ' '+`<span> ${ampm}</span>`
    dateE.innerHTML=days[day]+', '+ date +' '+ months[month]+' '+year
   
},1000);
async function checkweather(location){
    const response= await fetch(apiurl + location + `&appid=${apikey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".location").innerHTML= data.name;
    document.querySelector(".day-temp").innerHTML= Math.round(data.main.temp) + "°c" ;
    document.querySelector(".h-value").innerHTML= data.main.humidity;
    document.querySelector(".a-value").innerHTML= data.main.pressure;
    document.querySelector(".w-value").innerHTML= data.wind.speed;
    document.querySelector(".name").innerHTML= data.weather[0].main;
    document.querySelector(".m-time").innerHTML=data.main.temp_min + "°c" ;
    document.querySelector(".m-time1").innerHTML=data.main.temp_max + "°c" ;
    if(data.weather[0].id >=701 && data.weather[0].id <=781)
    {
        weathericon.src = "fog-mist.png";
    }
   else if(data.weather[0].id >=200 && data.weather[0].id <=232)
    {
        weathericon.src = "thunder-removebg-preview.png";
    }
    else if(data.weather[0].id >=300 && data.weather[0].id <=321)
    {
        weathericon.src = "drizzle.png";
    }
    else if(data.weather[0].id >=500 && data.weather[0].id <=531)
    {
        weathericon.src = "rain-removebg-preview.png";
    }
    else if(data.weather[0].id >=600 && data.weather[0].id <=622)
    {
        weathericon.src = "snow-removebg-preview.png";
    }
    else if(data.weather[0].id >=801 && data.weather[0].id <=804)
    {
        weathericon.src = "cloud-removebg-preview.png";
    }
    else 
    {
        weathericon.src = "sun-removebg-preview.png";
    }

}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});
// checkweather();

