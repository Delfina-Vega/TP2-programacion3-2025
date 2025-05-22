//conexion al HTML
document.getElementById('enviar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const altura = document.getElementById('altura').value;
    const correo = document.getElementById('correo').value;

    const resultado = document.getElementById('resultado');
    
    //vaiables para la validacion, guarda mensajes de error o exito y bandera que indica si las validaciones son correctas
    let mensaje = "";
    let valido = true;

    //validamos todos los campos
    if (nombre === "" || nombre.length > 50) {
        mensaje += "El nombre no puede estar vacio ni superar los 50 caracteres.   ";
        valido = false;
    }

    if (apellido === "" || apellido.length > 50) {
        mensaje += "El apellido no puede estar vacio ni superar los 50 caracteres.   ";
        valido = false;
    }

    //validamos la edad
    if (edad < 0) {
        mensaje += "La edad ingresada no puede ser negativa.   ";
        valido = false;

    }   else if (edad < 18 ) {
        mensaje += "Debe ser mayor de edad.   ";
        valido = false;
    }  

    //validamos la altura
    if (altura < 0 || altura > 230)  {
        mensaje += "La altura debe estar entre 0 y 230 cm.   ";
        valido = false;
    }

    //validamos el correo
    if (correo === "" || !correo.includes("@"))  {
        mensaje += "El correo electronico debe tener un '@' y no estar vacio.   ";
        valido = false;
    }

    //muestra de mensajes 

    if (valido) {
        mensaje = "Todos los datos son validos. Formulario completado!  ";
        resultado.style.color = "green";

    }  else {
        resultado.style.color = "red";
    }
    resultado.textContent = mensaje;
});