function calculate(event) {
  event.preventDefault(); 

  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let num3 = parseFloat(document.getElementById('num3').value);

  if (isNaN(num3)) {
    num3 = 0; 
  }

  let result = num1 + num2 + num3;
  document.getElementById('result').innerText = 'Résultat : ' + result;
}