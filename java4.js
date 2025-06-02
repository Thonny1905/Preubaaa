document.getElementById("imcForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!nombre || isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    resultado.innerHTML = `<div class="alert alert-danger">Por favor, ingrese todos los datos correctamente.</div>`;
    return;
  }

  const imc = peso / (altura * altura);
  let clasificacion = "";

  if (imc < 18.5) {
    clasificacion = "Bajo peso";
  } else if (imc < 25) {
    clasificacion = "Normal";
  } else if (imc < 30) {
    clasificacion = "Sobrepeso";
  } else {
    clasificacion = "Obesidad";
  }

  resultado.innerHTML = `
    <div class="alert alert-success">
      <strong>${nombre}</strong><br>
      Tu IMC es: <strong>${imc.toFixed(2)}</strong><br>
      Clasificación: <strong>${clasificacion}</strong>
    </div>
  `;
});