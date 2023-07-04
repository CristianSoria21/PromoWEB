//Variables globales
let registro = [];

infoRegistro = {
  txtNombre,
  txtApodo,
  txtCorreo,
  txtRepCorreo,
  txtContraseña,
  txtRepContraseña,
  txtTelefono,
};
// Agrega los datos de registro en localStorage
function datosRegistro1() {
  registro = JSON.parse(localStorage.getItem("miRegistro")) || [];
  infoRegistro = {
    txtNombre: document.getElementById("txtNombre").value,
    txtApodo: document.getElementById("txtApodo").value,
    txtCorreo: document.getElementById("txtCorreo").value,
    txtRepCorreo: document.getElementById("txtRepCorreo").value,
    txtContraseña: document.getElementById("txtContraseña").value,
    txtRepContraseña: document.getElementById("txtRepContraseña").value,
    txtTelefono: document.getElementById("txtTelefono").value,
  };
  registro.push(infoRegistro);
  localStorage.setItem("miRegistro", JSON.stringify(registro));
  console.log(registro);
}
