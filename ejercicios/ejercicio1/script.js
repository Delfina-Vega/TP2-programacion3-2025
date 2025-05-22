document.getElementById('calcular').addEventListener('click', () => {
    const peso = document.getElementById('peso').value;
    const estatura = document.getElementById('estatura').value;

    const imc = peso / (estatura * estatura);

    window.alert ("Su IMC es : " + imc.toFixed(2));
});