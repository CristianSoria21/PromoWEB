
function mostrarDatos() {
  let registro = [];
  registro = JSON.parse(localStorage.getItem("miRegistro")) || [];
  uCorreo = document.getElementById("txtCorreo").value;
  uContraseña = document.getElementById("txtContraseña").value;

  let ban = true;
  console.log(uContraseña)
  if (uContraseña != "" && uCorreo != "") {
    registro.forEach(function (u) {
      if (uCorreo == u.txtCorreo && uContraseña == u.txtContraseña) {
        window.location = "index.html";
        // alert("Inicio de sesión exitoso");
        ban = false;
        //CambiarNombres();
        cambioc();
      }
    });
    if (ban) alert("El correo o contraseña son incorrectos");
    console.log(uCorreo);
    console.log(uContraseña);
  }
}


