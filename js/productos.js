/*
let productos = [
  {
    "id":1,
    "nombre":"pantalon candela",
    "precio":3500,
    "img": "../pictures/pantalon.jpg"
 },
 {
    "id":2,
    "nombre":"bombachon pia",
    "precio":3000,
    "img": "../pictures/bombachon.jpg"
 },
 {
    "id":3,
    "nombre":"sweater paloma",
    "precio":4500,
    "img": "../pictures/swetter.jpg"
 },
 {
    "id":4,
    "nombre":"body flor",
    "precio":4000,
    "img": "../pictures/bodiCorto.jpg"
 },
 {
    "id":5,
    "nombre":"enterito filipa",
    "precio":4500,
    "img": "../pictures/Enterito.jpg"
 },
 {
    "id":6,
    "nombre":"sweater pia",
    "precio":5000,
    "img": "../pictures/sweater pia.jpg"
 },
 {
    "id":7,
    "nombre":"sweater luisi",
    "precio":5500,
    "img": "../pictures/SwetterBoton.jpg"
 },
 {
    "id":8,
    "nombre":"remera olivia",
    "precio":3000,
    "img": "../pictures/remera.jpg"
 },
 {
    "id":9,
    "nombre":"sweater filipa",
    "precio":4800,
    "img": "../pictures/sweater filipa.jpg"
   
 },
 {
    "id":10,
    "nombre":"pantalon filipa",
    "precio":3800,
    "img": "../pictures/pantalonCordon.jpg"
 },
 {
    "id":11,
    "nombre":"enterito candela",
    "precio":4700,
    "img": "../pictures/enterito candela.jpg"
 },
 {
    "id":12,
    "nombre":"short franca",
    "precio":4000,
    "img": "../pictures/short franca.jpg"
 },
 {
    "id":13,
    "nombre":"set franca",
    "precio":10000,
    "img": "../pictures/conjunto.jpg" 
 },
 {
    "id":14,
    "nombre":"set pia",
    "precio":9800,
    "img": "../pictures/setInvierno.jpg"
 },
 {
    "id":15,
    "nombre":"set marga",
    "precio":11200,
    "img": "../pictures/setTejido.jpg"
 }
]
*/


const contenedor = document.querySelector(".productosVole");

//pintamos nuestros productos en el dom, determinando nuestro html
const renderServicios = (arr) => {
  let html;
  contenedor.innerHTML = "";
  //recorer con el foreach nuestro array y por cada item genere ese html definido
    arr.forEach(item=>{
      html = `
      <div class="articulo">
        <img class="articuloImg" src="${item.img}" alt="${item.nombre}">
        <h2 class="articuloTitle">${item.nombre}</h2>
        <h2 class="articuloPrecio">${item.precio}</h2>
        <a role="button" class="consultasEnca" id="botonComprar">agregar al carrito</a>
      </div>
       `;
       
    contenedor.innerHTML += html;
    })
  };

//declaramos fetchapi para obtener nuestros datos locales 
const fetchApi= async ()=>{
  const response= await fetch('../data/db.json');
  const data= await response.json();
    
  renderServicios(data)
};

fetchApi()








