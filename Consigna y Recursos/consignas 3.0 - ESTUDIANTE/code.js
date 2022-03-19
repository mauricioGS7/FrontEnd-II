/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre = prompt('Ingresa tu nombre');
 datosPersona.edad = 2022 - parseInt(prompt('Ingresa el año en que naciste'));
 datosPersona.ciudad = prompt('Ingresa la ciudad donde vives');
 datosPersona.interesPorJs = confirm('Te interesa Javascript?');
 console.log(datosPersona);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */    
  let spanNombre = document.getElementById('nombre');
  let spanEdad = document.getElementById('edad');
  let spanCiudad = document.getElementById('ciudad');
  let spanJavascript = document.getElementById('javascript');
  
  let txtNombre = document.createTextNode(datosPersona.nombre);
  let txtEdad = document.createTextNode(datosPersona.edad);
  let txtCiudad = document.createTextNode(datosPersona.ciudad);
  let txtInteresJs =  document.createTextNode(datosPersona.interesPorJs ? 'SI' : 'NO');

  if( spanNombre.hasChildNodes() && spanEdad.hasChildNodes() && spanCiudad.hasChildNodes && spanJavascript.hasChildNodes()){
    spanNombre.removeChild(spanNombre.firstChild);
    spanEdad.removeChild(spanEdad.firstChild);
    spanCiudad.removeChild(spanCiudad.firstChild);
    spanJavascript.removeChild(spanJavascript.firstChild);    
  } 

  spanNombre.appendChild(txtNombre);
  spanEdad.appendChild(txtEdad);
  spanCiudad.appendChild(txtCiudad);
  spanJavascript.appendChild(txtInteresJs);
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let contenedorFila = document.getElementById('fila');
  for(tarjeta of listado){
    let lenguajes = document.createTextNode(tarjeta.lenguajes);
    let bimestre = document.createTextNode(tarjeta.bimestre);
    
    let card = document.createElement('div');
    let imagen = document.createElement("img");
    let pLenguaje = document.createElement('p');
    let pBimestre = document.createElement('p');

    card.classList.add('caja'); 
    
    imagen.setAttribute("src", tarjeta.imgUrl);      
    imagen.setAttribute('alt', tarjeta.lenguajes); 

    pLenguaje.appendChild(lenguajes);    
    pBimestre.appendChild(bimestre);
    card.appendChild(imagen);
    card.appendChild(pLenguaje);
    card.appendChild(pBimestre);      
    contenedorFila.appendChild(card);    
        
    materiasBtn.removeEventListener('click', recorrerListadoYRenderizarTarjetas);
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let divContenedor = document.getElementById('sitio');
 divContenedor.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener('keydown', (event) =>{
  if(event.key == "F" ||  event.key == "f"){    
    let msgPerfil = document.getElementById("sobre-mi");
    msgPerfil.classList.remove('oculto');
  }
})