const temperatureInput = document.getElementById('temperature');
const scaleSelect = document.getElementById('scale');
const convertButton = document.getElementById('convert-button');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', () => {
  // Validate the input
  if (!temperatureInput.value || isNaN(temperatureInput.value)) {
    alert('Please enter a valid temperature.');
    return;
  }

  // Get the input temperature and scale
  const temperature = temperatureInput.value;
  const scale = scaleSelect.value;

  // Convert the temperature
  let convertedTemperature;
  if (scale === 'Celsius') {
    convertedTemperature = (temperature * 9 / 5) + 32;
    convertedTemperature = convertedTemperature.toFixed(2);
    convertedTemperature += '°F';
  } else if (scale === 'Fahrenheit') {
    convertedTemperature = (temperature - 32) * 5 / 9;
    convertedTemperature = convertedTemperature.toFixed(2);
    convertedTemperature += '°C';
  } 
  // else if (scale === 'Kelvin') {
  //   convertedTemperature = temperature - 273.15;
  //   convertedTemperature = convertedTemperature.toFixed(2);
  //   convertedTemperature += '°K';
  // }

  // Display the converted temperature
  // resultDiv.textContent = `${temperature}°${scale} is equal to ${convertedTemperature}.`;
  resultDiv.textContent = ` ${convertedTemperature}.`;
});

