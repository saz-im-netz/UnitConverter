/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const converBtn = document.getElementById("convert-btn");
const lengthField = document.getElementById("length");
const volumeField = document.getElementById("volume");
const massField = document.getElementById("mass");
const inputField = document.getElementById("input-field");

const meterToFeet = 3.281;
const feetToMeter = 1/meterToFeet;
const literToGallon = 0.264;
const gallonToLiter = 1/literToGallon;
const kilogramToPound = 2.204;
const poundToKilogram = 1/kilogramToPound;


converBtn.addEventListener("click", function(){
    let feet = convertUnit(meterToFeet);
    let meter = convertUnit(feetToMeter);

    lengthField.innerHTML = `${inputField.value} meters = ${feet} feet | 
        ${inputField.value} feet = ${meter} meters`;

    let liter = convertUnit(gallonToLiter);
    let gallon = convertUnit(literToGallon);

    volumeField.innerHTML = `${inputField.value} liters = ${gallon} gallons | 
        ${inputField.value} gallons = ${liter} liters`;

    let kilograms = convertUnit(poundToKilogram);
    let pounds = convertUnit(kilogramToPound);

    massField.innerHTML = `${inputField.value} kilograms = ${pounds} pounds | 
        ${inputField.value} pounds = ${kilograms} kilograms`;
})





function convertUnit(unit){
    let number = inputField.value;
    let newUnit = Math.round(number*unit*1000)/1000;
    return newUnit;
}