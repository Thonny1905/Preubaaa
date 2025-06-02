document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const dni = document.getElementById("dni").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const cargo = parseFloat(document.getElementById("cargo").value);
  const resultado = document.getElementById("resultado");

  const descuento = 23;

  if (!/^\d{8}$/.test(dni)) {
    resultado.innerHTML = `<div class="alert alert-danger">Ingrese un DNI válido de 8 dígitos.</div>`;
    return;
  }

  if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    resultado.innerHTML = `<div class="alert alert-danger">El nombre solo debe contener letras.</div>`;
    return;
  }

  if (isNaN(cargo)) {
    resultado.innerHTML = `<div class="alert alert-danger">Seleccione un cargo válido.</div>`;
    return;
  }

  const sueldoNeto = cargo - (cargo * descuento / 100);

  resultado.innerHTML = `
    <div class="alert alert-success">
      <strong>Resultado:</strong><br>
      DNI: ${dni}<br>
      Nombre: ${nombre}<br>
      Sueldo Bruto: S/ ${cargo.toFixed(2)}<br>
      Descuento (AFP + Salud): ${descuento}%<br>
      <strong>Sueldo Neto: S/ ${sueldoNeto.toFixed(2)}</strong>
    </div>
  `;
});