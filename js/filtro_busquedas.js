const negocios = [
  { nombre: "La burgueria" },
  { nombre: "kwarachi" },
  { nombre: "roua boutique" },
  { nombre: "vicki boutique" },
];

// const formulario = document.querySelector("#txtBuscador");
// const boton = document.querySelector("#boton");
// //const resultado = documento.querySelector("#resultado");

// const filtrar = () => {
//   // resultado.innerHTML = "";
//   const texto = formulario.value.toLocaleLowerCase();
//   for (let negocio of negocios) {
//     let nombre = negocio.nombre.toLocaleLowerCase();
//     if (nombre.indexOf(texto) !== -1) {
//       //   resultado.innerHTML += `
//       //    <li>${negocio.nombre}</li> `;
//       console.log(negocio.nombre);
//     }
//   }

//  if (resultado.innerHTML === "") {
// //     resultado.innerHTML += `
// //     <li>negocio no encontrado...</li>
// //     `;
//   }
// };
// boton.addEventListener("click", filtrar);

const buscar = document.querySelector(".text-input");
const negocio = document.querySelectorAll(".titulo");


function Buscar() {
  document.addEventListener("keyup", e => {
    if (buscar) {
      // console.log(e.target.value);
      negocio.forEach(element => {
        (element.textContent.toLocaleLowerCase().includes(e.target.value)) ?
          element.parentNode.classList.remove("filtro") : element.parentNode.classList.add("filtro");


      });
    }
  })
}
