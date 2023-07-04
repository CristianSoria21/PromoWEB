function cambio1()
{
   let registro1 = [];
  registro1 = JSON.parse(localStorage.getItem("miRegistro")) || [];
 

  registro1.forEach(function cambioc(u) {
    document.getElementById("txtInicio").innerHTML = u.txtApodo
    document.getElementById("txtRegist").innerHTML = u.txtNombre
  }); 

  let registrar = [];
  registrar = JSON.parse(localStorage.getItem("miEmpresa")) || [];
  

  registrar.forEach(function cambiox(u) {
      document.getElementById("txtNombre").innerHTML = u.txtNombre
      document.getElementById("txtTelefono").innerHTML = u.txtTelefono
      document.getElementById("txtDescripcion").innerHTML = u.txtDescripcion
      document.getElementById("txtGiro").innerHTML = u.txtGiro
      document.getElementById("txtCorreo").innerHTML = u.txtCorreo
  }); 

  var guardado = localStorage.getItem('miEmpresa');

  console.log('miEmpresa: ', JSON.parse(guardado));
}

window.onload = cambio1()


