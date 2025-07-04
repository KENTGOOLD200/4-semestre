//  Inicialización archivo de script para formulario interactivo utilizando HTML, CSS y JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los campos del formulario
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const contraseña = document.getElementById("contraseña");
  const confirmar = document.getElementById("confirmar");
  const edad = document.getElementById("edad");
  const btnEnviar = document.getElementById("btnEnviar");

  // Mensajes de error
  const errorNombre = document.getElementById("errorNombre");
  const errorCorreo = document.getElementById("errorCorreo");
  const errorContraseña = document.getElementById("errorContraseña");
  const errorConfirmar = document.getElementById("errorConfirmar");
  const errorEdad = document.getElementById("errorEdad");

  // Lista de dominios válidos comunes
  const dominiosValidos = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "icloud.com"];

  // Validar nombre
  function validarNombre() {
    if (nombre.value.trim().length < 3) {
      errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
      return false;
    }
    errorNombre.textContent = "";
    return true;
  }

  // Validar correo con expresión regular y dominio conocido
  function validarCorreo() {
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const valor = correo.value.trim();

    if (!regex.test(valor)) {
      errorCorreo.textContent = "Correo electrónico inválido.";
      return false;
    }

    const dominio = valor.split("@")[1];
    if (!dominiosValidos.includes(dominio)) {
      errorCorreo.textContent = `¿Quizás quisiste escribir "@gmail.com", "@hotmail.com", etc.?`;
      return false;
    }

    errorCorreo.textContent = "";
    return true;
  }

  // Validar contraseña
  function validarContraseña() {
    const valor = contraseña.value;
    if (valor.length < 8 || !/\d/.test(valor) || !/[!@#$%^&*]/.test(valor)) {
      errorContraseña.textContent = "Debe tener al menos 8 caracteres, un número y un carácter especial.";
      return false;
    }
    errorContraseña.textContent = "";
    return true;
  }

  // Validar confirmación de contraseña
  function validarConfirmar() {
    if (confirmar.value !== contraseña.value) {
      errorConfirmar.textContent = "Las contraseñas no coinciden.";
      return false;
    }
    errorConfirmar.textContent = "";
    return true;
  }

  // Validar edad
  function validarEdad() {
    const valor = parseInt(edad.value);
    if (isNaN(valor) || valor < 18) {
      errorEdad.textContent = "Debes tener al menos 18 años.";
      return false;
    }
    errorEdad.textContent = "";
    return true;
  }

  // Validar todo el formulario
  function validarFormulario() {
    const valido =
      validarNombre() &&
      validarCorreo() &&
      validarContraseña() &&
      validarConfirmar() &&
      validarEdad();

    btnEnviar.disabled = !valido;
  }

  // Escuchar cambios en los campos
  [nombre, correo, contraseña, confirmar, edad].forEach(input => {
    input.addEventListener("input", validarFormulario);
  });

  // Mostrar mensaje al enviar
  document.getElementById("registroForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Registro exitoso!");
  });
  // Agrega la clase 'tocado' cuando el usuario interactúe con un campo
  [nombre, correo, contraseña, confirmar, edad].forEach(input => {
    input.addEventListener("blur", () => {
      input.classList.add("tocado");
    });
});

});

// Fin del archivo de script para formulario interactivo utilizando HTML, CSS y JavaScript