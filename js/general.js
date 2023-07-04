

function cambio1()
{
   let registro1 = [];
  registro1 = JSON.parse(localStorage.getItem("miRegistro")) || [];
 

  registro1.forEach(function cambioc(u) {
    document.getElementById("txtInicio").innerHTML = u.txtNombre
    document.getElementById("txtRegist").innerHTML = u.txtApodo
  }); 
}

window.onload = cambio1()


/* function minegocio()
{
  let registro = [];
  registro = JSON.parse(localStorage.getItem("miEmpresa")) || [];
  

  registro.forEach(function cambiox(u) {
      document.getElementById("txtNombre").innerHTML = u.txtNombre
      document.getElementById("txtTelefono").innerHTML = u.txtTelefono
      document.getElementById("txtDireccion").innerHTML = u.txtDireccion
      document.getElementById("txtDescripcion").innerHTML = u.txtDescripcion
      document.getElementById("txtGiro").innerHTML = u.txtGiro
      document.getElementById("txtCorreo").innerHTML = u.txtCorreo

      var guardado = localStorage.getItem('miEmpresa');

      console.log('miEmpresa: ', JSON.parse(guardado));
  }); 
}

window.onload = minegocio */
