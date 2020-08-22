var button=document.querySelector(".enter");
var ipcity=document.querySelector(".ipcity");
var city=document.querySelector(".city");
var temp=document.querySelector(".temp");
var desc=document.querySelector(".desc");
button.addEventListener('click',function() {	
fetch("https://api.openweathermap.org/data/2.5/weather?q="+ipcity.value+"&appid=0ab1930a9584a13f9304de5f861a2ea3")
.then(response => response.json())
.then(data =>{
	city.innerHTML = data['name'];
	var tempu=data['main']['temp']-273.15;
    temp.innerHTML = tempu.toFixed(2);
    desc.innerHTML = data['weather'][0]['description'];
}).catch(err=>alert("Enter a correct city name"));
});
