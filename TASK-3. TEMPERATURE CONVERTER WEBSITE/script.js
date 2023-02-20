const form = document.querySelector('.form');
const inputTemperature = document.querySelector('.input-temperature');
const inputUnit = document.querySelector('.input-unit');
const outputUnit = document.querySelector('.output-unit');
const resultValue = document.querySelector('.result-value');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const temperature = parseFloat(inputTemperature.value);
  const inputUnitValue = inputUnit.value;
  const outputUnitValue = outputUnit.value;
  
  // Convert temperature to Celsius
  let celsius = temperature;
  if (inputUnitValue === 'fahrenheit') {
    celsius = (temperature - 32) * (5/9);
  } else if (inputUnitValue === 'kelvin') {
    celsius = temperature - 273.15;
  }
  
  // Convert Celsius to output unit
  let outputTemperature = celsius;
  if (outputUnitValue === 'fahrenheit') {
    outputTemperature = (celsius * (9/5)) + 32;
  } else if (outputUnitValue === 'kelvin') {
    outputTemperature = celsius + 273.15;
  }
  
  resultValue.textContent = outputTemperature.toFixed(2) + ' ' + outputUnitValue.toUpperCase();
});
