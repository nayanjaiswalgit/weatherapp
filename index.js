const searchtab = document.getElementsByClassName("searchweather")[0]; 
const showhtab = document.getElementsByClassName("yourweather")[0]; 
const circle = document.getElementsByClassName("circle")[0]; 
const spinner = document.getElementsByClassName("spinner")[0]; 
const searchbtn = document.getElementsByClassName("btn-tab")[0];
const searchbtn1 = document.getElementsByClassName("btn-tab")[1];
const inputdata = document.getElementsByName("city")[0];
const imgvier = document.getElementById("imgerror")

const cityname = document.getElementById("cityname");
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const windspeed = document.getElementById("windspeed");
const humidity = document.getElementById("humidity");
const clouds = document.getElementById("clouds");
const imgchange = document.getElementsByClassName("mainimg")[0];


console.log(imgchange);

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
searchweather();

async function  fetchdatafromserver(city){
    spinner.classList.add(".spinneractive")
    circle.classList.add("active")

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if(response?.ok){
        const result = await response.json();
        updatepage(result)
        inputdata.value = "";
    }
    else  {
        imgvier.classList.add("active")
        circle.classList.remove("active")
    }
   
};


function updatepage(result){

   cityname.innerText = result.name;
   weather.innerText = result.weather[0].main;
   temp.innerText =  result.main.temp;
   windspeed.innerText = result.wind.speed + "m/s";
   humidity.innerText = result.main.humidity + "%" ;
   clouds.innerText =  result.clouds.all + "%";
   imgchange.src=`img/${weather.innerText}.png`

   yourweather();

}


function yourweather() {
    searchtab.classList.remove("active");
    searchbtn1.classList.remove("activebtn")
    showhtab.classList.add("active")
    searchbtn.classList.add("activebtn")
    spinner.classList.remove(".spinneractive")
    circle.classList.remove("active")
    imgvier.classList.remove("active")
   


}
function searchweather(){
    showhtab.classList.remove("active");
    searchbtn.classList.remove("activebtn")
    searchtab.classList.add("active");
    searchbtn1.classList.add("activebtn")
    spinner.classList.remove(".spinneractive")
    circle.classList.remove("active")
    imgvier.classList.remove("active")
}
function search(){
    imgvier.classList.remove("active")
   fetchdatafromserver(inputdata.value);
}