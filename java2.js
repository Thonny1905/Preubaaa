document.getElementById("vehiculo").addEventListener("change", function() {
    const consumo = this.value;
    document.getElementById("consumo").value = consumo;
});

document.getElementById("gasForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const consumo = parseFloat(document.getElementById("consumo").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(consumo) || consumo <= 0 || isNaN(distancia) || distancia <= 0) {
        resultado.innerHTML = `<div class="alert alert-danger">Por favor, ingrese valores válidos y positivos.</div>`;
        return;
    }

    const litros = distancia / consumo;
    resultado.innerHTML = `
        <div class="alert alert-success">
            Se necesitan <strong>${litros.toFixed(2)}</strong> litros de gasolina para este viaje.
        </div>
    `;
});