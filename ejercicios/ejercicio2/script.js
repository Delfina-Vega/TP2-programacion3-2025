//Coexion a los botones de html
document.getElementById('calcular').addEventListener('click', () => {
    
    //se obtienen los valores ingresados en el input
    const alturaTotal = document.getElementById('alturaTotal').value;
    const base = document.getElementById('base').value;
    const alturaRect = document.getElementById('alturaRect').value;

    //calculos
    const alturaTri = alturaTotal - alturaRect;
    const areaRect = base * alturaRect;
    const areaTri = (base * alturaTri) / 2;
    const areaTotal = areaRect + areaTri;

    // Muestra de resultados
    window.alert("El area total del terreno es : " + areaTotal + " Metros cuadrados");
});