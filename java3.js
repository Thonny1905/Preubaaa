document.getElementById("prestamoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const monto = parseFloat(document.getElementById("monto").value);
  const plazo = parseFloat(document.getElementById("plazo").value);
  const tasa = 30; 
  const resultado = document.getElementById("resultado");

  if (isNaN(monto) || monto <= 0 || isNaN(plazo) || plazo <= 0) {
    resultado.innerHTML = `<div class="alert alert-danger">Ingrese valores válidos y positivos.</div>`;
    return;
  }

  const interes = (monto * tasa * plazo) / 100;
  const total = monto + interes;

  resultado.innerHTML = `
    <div class="alert alert-success">
      <strong>Resultados del Préstamo:</strong><br>
      Interés a pagar: S/ ${interes.toFixed(2)}<br>
      Monto total a pagar: <strong>S/ ${total.toFixed(2)}</strong>
    </div>
  `;
});