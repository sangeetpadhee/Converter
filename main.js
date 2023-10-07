let allapps = document.querySelector(".allapps");
// let show = document.querySelector(".show");
let container = document.querySelector(".container");
// MONEY
let money = document.querySelector(".money");
let selectcountry = document.querySelector(".selectcountry");
let money_result = document.querySelector(".money_result");
let rupee_input = document.querySelector(".rupee_input");
let clearmoney = document.querySelector(".clearmoney");
// Temperature
let temperature = document.querySelector(".temperature");
let temperature_input = document.querySelector(".temperature_input");
let selecttemperature = document.querySelector(".selecttemperature");
let temperature_result = document.querySelector(".temperature_result");
let cleartemperature = document.querySelector(".cleartemperature");
// LENGTH
let length = document.querySelector(".length");
let length_input = document.querySelector(".length_input");
let selectlength = document.querySelector(".selectlength");
let length_result = document.querySelector(".length_result");
let clearlength = document.querySelector(".clearlength");
// AREA
let area = document.querySelector(".area");
let selectarea = document.querySelector(".selectarea");
let forsquare = document.querySelector(".forsquare");
let arealength_input = document.querySelector(".arealength_input");
let areabreadth_input = document.querySelector(".areabreadth_input");
let areasquare_result = document.querySelector(".areasquare_result");
let clearareasquare = document.querySelector(".clearareasquare");
let areasquareresult = document.querySelector(".areasquareresult");
// CIRCLE
let forcircle = document.querySelector(".forcircle");
let circlearea_input = document.querySelector(".circlearea_input");
let circlearea_result = document.querySelector(".circlearea_result");
let clearcirclearea = document.querySelector(".clearcirclearea");
// FUEL
let fuel = document.querySelector(".fuel");
let fuel_input = document.querySelector(".fuel_input");
let fuelprice_input = document.querySelector(".fuelprice_input");
let fuelkm_result = document.querySelector(".fuelkm_result");
let fuel_result = document.querySelector(".fuel_result");
let clearfuel = document.querySelector(".clearfuel");
let fuelcalculate = document.querySelector(".fuelcalculate");
// TIME
let time = document.querySelector(".time");
let time_input = document.querySelector(".time_input");
let selecttime = document.querySelector(".selecttime");
let time_result = document.querySelector(".time_result");
let cleartime = document.querySelector(".cleartime");


// STARTING



// show.addEventListener('click', ()=>{
//     allapps.style.display="grid";
// })

// // APP OPEN FACE

function m(){
container.style.display="block";
money.style.display="block";
temperature.style.display="none";
length.style.display="none";
area.style.display="none";
fuel.style.display="none";
time.style.display="none";
document.body.style.background="radial-gradient(#648880, #293f50)";
}

function t(){
container.style.display="block";
money.style.display="none";
temperature.style.display="block";
length.style.display="none";
area.style.display="none";
fuel.style.display="none";
time.style.display="none";
document.body.style.background="radial-gradient(#648880, #293f50)";
}
    
function l(){
container.style.display="block";
money.style.display="none";
temperature.style.display="none";
length.style.display="block";
area.style.display="none";
fuel.style.display="none";
time.style.display="none";
document.body.style.background="radial-gradient(#648880, #293f50)";
}

function a(){
container.style.display="block";
money.style.display="none";
temperature.style.display="none";
length.style.display="none";
area.style.display="block";
fuel.style.display="none";
time.style.display="none";
document.body.style.background="radial-gradient(#648880, #293f50)";
}

function f(){
container.style.display="block";
money.style.display="none";
temperature.style.display="none";
length.style.display="none";
area.style.display="none";
fuel.style.display="block";
time.style.display="none";
document.body.style.background="radial-gradient(#648880, #293f50)";
}

function ti(){
container.style.display="block";
money.style.display="none";
temperature.style.display="none";
length.style.display="none";
area.style.display="none";
fuel.style.display="none";
time.style.display="block";
document.body.style.background="radial-gradient(#648880, #293f50)";
}

function cl(){

container.style.display="none";
money.style.display="none";
temperature.style.display="none";
length.style.display="none";
area.style.display="none";
fuel.style.display="none";
time.style.display="none";
document.body.style.background="rgb(0, 255, 170)";
}
// IMPORTANT PART

// MONEY

rupee_input.addEventListener('input', ()=>{
    if(selectcountry.value == "america"){
        let c = parseFloat(rupee_input.value)*0.012 ;
        money_result.value = c + " $"
    }else if(selectcountry.value == "pakistan"){
        let c = parseFloat(rupee_input.value)*3.7 ;
        money_result.value = "Rs " + c
    }else if(selectcountry.value == "china"){
        let c = parseFloat(rupee_input.value)*0.09 ;
        money_result.value = c + " ¥"
    }else if(selectcountry.value == "bangladesh"){
        let c = parseFloat(rupee_input.value)*1.32 ;
        money_result.value = c + " ৳"
    }else if(selectcountry.value == "singapore"){
        let c = parseFloat(rupee_input.value)*0.016 ;
        money_result.value = c + " S$" 
    }else{
        money_result.value = "PLEASE CHOOSE THE COUNTRY"
    }
})

clearmoney.addEventListener('click', ()=>{
    rupee_input.value="";
    money_result.value="";
    selectcountry.value="disable";
})

// TEMPERATURE

temperature_input.addEventListener('input', ()=>{
    if(selecttemperature.value == "ferhenite"){
        let c = (parseFloat(temperature_input.value)*9/5) + 32 ;
        temperature_result.value = c + " F" 
    }else if(selecttemperature.value == "kelvin"){
        let c = parseFloat(temperature_input.value) + 273.15 ;
        temperature_result.value = c + " K"
    }else{
        temperature_result.value = "PLEASE CHOOSE THE UNIT"
    }
})

cleartemperature.addEventListener('click', ()=>{
    temperature_input.value="";
    temperature_result.value="";
    selecttemperature.value="disable";
})

// LENGTH

length_input.addEventListener('input', ()=>{
    if(selectlength.value == "km"){
        let c = parseFloat(length_input.value)*0.001 ;
        length_result.value = c + " Km" 
    }else if(selectlength.value == "cm"){
        let c = parseFloat(length_input.value)*100 ;
        length_result.value = c + " Cm"
    }else if(selectlength.value == "mm"){
        let c = parseFloat(length_input.value)*1000 ;
        length_result.value = c + " Mm"
    }else if(selectlength.value == "nm"){
        let c = parseFloat(length_input.value)*1000000000 ;
        length_result.value = c + " Nm"
    }else if(selectlength.value == "micro"){
        let c = parseFloat(length_input.value)*1000000 ;
        length_result.value = c + " Micro"
    }else if(selectlength.value == "ft"){
        let c = parseFloat(length_input.value)*3.28 ;
        length_result.value = c + " Ft"
    }else if(selectlength.value == "inch"){
        let c = parseFloat(length_input.value)*39.3 ;
        length_result.value = c + " Inch"
    }else{
        length_result.value = "PLEASE CHOOSE THE UNIT"
    }
})

clearlength.addEventListener('click', ()=>{
    length_input.value="";
    length_result.value="";
    selectlength.value="disable";
})

// AREA

selectarea.addEventListener('click', ()=>{
    if(selectarea.value == "disable"){
        forcircle.style.display="none";
        forsquare.style.display="none";
    }else if(selectarea.value == "square"){
        forcircle.style.display="none";
        forsquare.style.display="block";
    }else if(selectarea.value == "cube"){
        forcircle.style.display="none";
        forsquare.style.display="block";
    }else if(selectarea.value == "rectangle"){
        forcircle.style.display="none";
        forsquare.style.display="block";
    }else if(selectarea.value == "parallelogram"){
        forcircle.style.display="none";
        forsquare.style.display="block";
    }else if(selectarea.value == "rhombus"){
        forcircle.style.display="none";
        forsquare.style.display="block";
    }else if(selectarea.value == "hexagon"){
        forcircle.style.display="none";
        forsquare.style.display="block";
    }else if(selectarea.value == "circle"){
        forcircle.style.display="block";
        forsquare.style.display="none";
    }else if(selectarea.value == "triangle"){
        forcircle.style.display="none";
        forsquare.style.display="block";
    }else{
        forcircle.style.display="none";
        forsquare.style.display="none";
    }
})

// FOR SQUARE 

areasquareresult.addEventListener('click', ()=>{
if(selectarea.value == "square"){
let c = parseFloat(arealength_input.value)*parseFloat(areabreadth_input.value);
areasquare_result.value = c + " ㎡"
}
 else if(selectarea.value == "cube"){
    let c = 6*(parseFloat(arealength_input.value)*parseFloat(areabreadth_input.value));
areasquare_result.value = c + " m³"
}
else if(selectarea.value == "rectangle"){
   let c = parseFloat(arealength_input.value)*parseFloat(areabreadth_input.value);
areasquare_result.value = c + " ㎡"
}
else if(selectarea.value == "triangle"){
   let c = 1/2*(parseFloat(arealength_input.value)*parseFloat(areabreadth_input.value));
areasquare_result.value = c + " ㎡"
}
else if(selectarea.value == "parallelogram"){
   let c = parseFloat(arealength_input.value)*parseFloat(areabreadth_input.value);
areasquare_result.value = c + " ㎡"
}
else if(selectarea.value == "Rhombus"){
   let c = (parseFloat(arealength_input.value)*parseFloat(areabreadth_input.value))/2;
areasquare_result.value = c + " ㎡"
}
else if(selectarea.value == "hexagon"){
   let c = 2.59*(parseFloat(arealength_input.value)*parseFloat(areabreadth_input.value));
areasquare_result.value = c + " ㎡"
}else{
    areasquare_result.value = "Please Fill The Above"
}
})

clearareasquare.addEventListener('click', ()=>{
    arealength_input.value="";
    areabreadth_input.value="";
    areasquare_result.value="";
    selectarea.value="disable";
    forsquare.style.display="none";
    forcircle.style.display="none"
})

// FOR CIRCLE

circlearea_input.addEventListener('input', ()=>{
    let c = 22/7*((parseFloat(circlearea_input.value))*(parseFloat(circlearea_input.value)))
    circlearea_result.value = c + " ㎡"
})

clearcirclearea.addEventListener('click', ()=>{
    circlearea_input.value="";
    circlearea_result.value="";
    selectarea.value="disable";
    forsquare.style.display="none";
    forcircle.style.display="none"
})

// FUEL

fuelcalculate.addEventListener('click', ()=>{
    let c = (parseFloat(fuel_input.value))/(parseFloat(fuelprice_input.value));
    let b = parseFloat(fuelkm_result.value)/c
    fuel_result.value = "Your Car Average Is " + b + " Km/L";
})
clearfuel.addEventListener('click', ()=>{
    fuel_input.value="";
    fuelkm_result.value="";
    fuel_result.value="";
    fuelprice_input.value="";
})

// TIME

time_input.addEventListener('input', ()=>{
    if(selecttime.value == "day"){
        let c = parseFloat(time_input.value)*0.041 ;
        time_result.value = c + " Days"
    }else if(selecttime.value == "week"){
        let c = parseFloat(time_input.value)*0.025 ;
        time_result.value = c + " Weeks"
    }else if(selecttime.value == "month"){
        let c = parseFloat(time_input.value)*3.7 ;
        time_result.value = c + " Months"
    }else if(selecttime.value == "year"){
        let c = parseFloat(time_input.value)*0.000114155 ;
        time_result.value = c + " Years"
    }else if(selecttime.value == "second"){
        let c = parseFloat(time_input.value)*3600 ;
        time_result.value = c + " Seconds"
    }else if(selecttime.value == "minute"){
        let c = parseFloat(time_input.value)*60 ;
        time_result.value = c + " Minutes"
    }else if(selecttime.value == "millisecond"){
        let c = parseFloat(time_input.value)* 3600000 ;
        time_result.value = c + " Milliseconds"
    }else if(selecttime.value == "microsecond"){
        let c = parseFloat(time_input.value)* 3.6e+9 ;
        time_result.value = c + " Microseconds"
    }else if(selecttime.value == "nanosecond"){
        let c = parseFloat(time_input.value)* 3.6e+12 ;
        time_result.value = c + " Nanoseconds"
    }else{
        time_result.value = "PLEASE CHOOSE THE UNIT"
    }
})

cleartime.addEventListener('click', ()=>{
    time_input.value="";
    time_result.value="";
    selecttime.value="disable";
})