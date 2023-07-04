function cambio2()
{
  let registro = [];
  registro = JSON.parse(localStorage.getItem("miRegistro")) || [];
  

  registro.forEach(function cambioc(u) {
      document.getElementById("txtInicio").innerHTML = u.txtNombre
      document.getElementById("txtRegist").innerHTML = u.txtApodo
      document.getElementById("txtApodo").innerHTML = u.txtApodo
      document.getElementById("txtCorreo").innerHTML = u.txtCorreo
      document.getElementById("txtNomnbre").innerHTML = u.txtNombre
      document.getElementById("txtTelefono").innerHTML = u.txtTelefono

  }); 
}

function cargar()
{
  cambio2()
  cambio1()
}

window.onload = cargar()