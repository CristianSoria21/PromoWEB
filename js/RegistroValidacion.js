const nombre = document.getElementById("txtNombre");
const apodo = document.getElementById('txtApodo');
const correo = document.getElementById('txtCorreo');
const repcorreo = document.getElementById('txtRepCorreo');
const cont = document.getElementById('txtContraseña');
const repcont = document.getElementById('txtRepContraseña');
const telf = document.getElementById('txtTelefono');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

form.addEventListener("submit", e=>
{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexNombre =/^[a-zA-Z ]+$/
    let regexApodo = /^[a-zA-Z0-9]+$/
    let regexCont = /^(?=.*\d)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    parrafo.innerHTML = ""
   
    entrar = false
    
    if(!regexNombre.test(nombre.value))
    {
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if(!regexApodo.test(apodo.value))
    {
        warnings += 'El Apodo no es valido <br>'
        entrar = true
    }
    if(!regexEmail.test(correo.value))
    {
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(repcorreo.value != correo.value)
    {
        warnings += 'El email no coinside <br>'
        entrar = true
    }
    if(!regexCont.test(cont.value))
    {
        warnings += 'La Contraseña no es valida <br>'
        entrar = true
    }
    if(repcont.value != cont.value)
    {
        warnings += 'La contraseña no coinside <br>'
        entrar = true
    }
    if(entrar)
    {
        parrafo.innerHTML = warnings
    }else{
        datosRegistro()
        document.location.href = "InicioSesion.html"
    }
})

//Variables globales
let registro = [];

infoRegistro = {
  txtNombre,
  txtApodo,
  txtCorreo,
  txtContraseña,
  txtTelefono,
};
// Agrega los datos de registro en localStorage
function datosRegistro() {
  registro = JSON.parse(localStorage.getItem("miRegistro")) || [];
  infoRegistro = {
    txtNombre: document.getElementById("txtNombre").value,
    txtApodo: document.getElementById("txtApodo").value,
    txtCorreo: document.getElementById("txtCorreo").value,
    txtContraseña: document.getElementById("txtContraseña").value,
    txtTelefono: document.getElementById("txtTelefono").value,
  };
  registro.push(infoRegistro);
  localStorage.setItem("miRegistro", JSON.stringify(registro));
  console.log(registro);
}

