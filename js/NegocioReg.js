let registro = [];

infoRegistro = {
  txtNombre,
  txtTelefono,
  txtDireccion,
  txtDescripcion,
  txtGiro,
  txtCorreo,
};
// Agrega los datos de registro en localStorage
function datosRegistronego() {
  registro = JSON.parse(localStorage.getItem("miEmpresa")) || [];
  infoRegistro = {
    txtNombre: document.getElementById("txtNombre").value,
    txtTelefono: document.getElementById("txtTelefono").value,
    txtDireccion: document.getElementById("txtDireccion").value,
    txtDescripcion: document.getElementById("txtDescripcion").value,
    txtGiro: document.getElementById("txtGiro").value,
    txtCorreo: document.getElementById("txtCorreo").value,
  };
  registro.push(infoRegistro);
  localStorage.setItem("miEmpresa", JSON.stringify(registro));
  console.log(registro);
}