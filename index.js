function converterTemperatura() {
  var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  var celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById('resultado').innerHTML = 'Temperatura em Celsius: ' + celsius.toFixed(2);

  if (celsius > 30) {
    document.body.style.backgroundColor = 'orange';
  } else {
    document.body.style.backgroundColor = 'lightblue';
  }
}
