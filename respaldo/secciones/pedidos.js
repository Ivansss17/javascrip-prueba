let libro = "";
let cantidadLibro = 1;
let precio = 0;
const arrayPedidos = [];
let arrayLibros = ["Celiacos", "Hipertensos", "Diabetes", "Gastritis"];
let arrayPrecios = [1800, 1800, 1000, 1300];
let btnLibro1 = document.getElementById("btnLibro1");
let boton2 = document.getElementById("btnLibro2");
let boton3 = document.getElementById("btnLibro3");
let boton4 = document.getElementById("btnLibro4");
let id = 1;
const addCarrito = document.querySelectorAll('.btnAdd');

// Primera interaccion con html/dom
class ProductosL {
    constructor(objeto){
        this.id = objeto.id,
        this.nombre = objeto.nombre,
        this.precio = objeto.precio,
        this.cantidad = objeto.cantidad
        
    }
};



 /* const productos = [{ id: 1,  nombre: "Celiacos", precio: 1800,  cantidad: 0 },  
                  {  id: 2,  nombre: "Hipertensos", precio: 1800, cantidad: 0 },
                  {  id: 3,  nombre: "Diabetes"  , precio: 1000, cantidad: 0 },
                  {  id: 4,  nombre: "Gastritis" , precio: 1300, cantidad: 0},
                  {  id: 5,  nombre: "otro" , precio: 1500 , cantidad: 0 },
                  {  id: 6,  nombre: "algo mas" , precio: 8000 , cantidad: 0 },
                  {  id: 8,  nombre: "algo mas" , precio: 8000 , cantidad: 0 },
                ]; */

const productos = new Array();

const urlJson = "./json/json.json";

$.getJSON(urlJson, function(respuesta, estado){
    if(estado === "success"){
        
        let misDatos = respuesta;
        for (const dato of misDatos){
             prod = new ProductosL (dato);
             productos.push(prod);
            
        }   
        carrito();
    }else {
        console.log(estado)
        }
    })
    
console.log(productos);
console.log("estoy aqui");

function carrito() {
    

for (const producto of productos) {
    console.log("ahora aqui")
    
    $('#Libros').append(`<div class="card" style="width: 18rem;">
    <img src="./adjuntos/${producto.id}.png" class="card-img-top" alt="${producto.id}">
    <div class="card-body">
      <h5 id="${producto.nombre}" class="card-title" value="${producto.nombre}">${producto.nombre}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <h5>Precio: ${producto.precio}<h5>
      <a href="#" id="btnLibro${producto.id}"class="btn btn-primary btnAdd">agregar al carrito</a>
    </div>
  </div>`);

  $(`#btnLibro${producto.id}`).click( function (e) {
    cantidad = 1;
    alert("agregaste el libro: "+ producto.nombre);
    compra = new Pedido (producto.id, producto.nombre,producto.precio,cantidad);
    arrayPedidos.push(compra);


    alert("Precio: "+producto.precio);
    


     
}) 

}} 
console.log("3")







class Pedido {
    constructor(id,nombre, precio, cantidad){
        this.id = id,
        this.libro = nombre,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }

    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
    }

    calcularIva() {
        return this.subTotal * 0.21;
    }

    calcularEnvio() {
        if(this.subTotal >= 2300) {
            this.envio = 0;
        } else {
            this.envio = 475;
        }
    }

    calcularTotal() {
        this.total = this.subTotal + this.envio + this.calcularIva();
    }
};

/* 
function pedidoLibro() {
    while(!libro || libro == 0 || libro > 4) {
        libro = parseInt(prompt("¿Qué libro desea comprar?:\n 1: Celiacos($1800)\n 2:Hipertensos($1800)\n 3:Diabeticos($1000)\n 4:Gastritis($1300)"));
    }

    switch(libro){
        case 1:
            libro = arrayLibros[0];
            precio = arrayPrecios[0];
            break;
        case 2:
            libro = arrayLibros[1];
            precio = arrayPrecios[1];
            break;
        case 3:
            libro = arrayLibros[2];
            precio = arrayPrecios[2];
            break;
        case 4:
            libro = arrayLibros[3];
            precio = arrayPrecios[3];
            break;
    }

    while(!cantidadLibro || cantidadLibro == 0){
        cantidadLibro = parseInt(prompt("Libro elegido: "+ libro + "\n Introduzca la cantidad deseada.(sólo números)"));
    }

    return new Pedido(libro, precio, cantidadLibro)
}

//alert("Bienvenida/o a la tienda de guias alimentarias");

const pedido = pedidoLibro();

pedido.calcularSubTotal();
pedido.calcularIva();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Detalle del pedido:\n"+
    "- Libro: " + pedido.libro + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" +
    "- IVA 21%: $" + pedido.calcularIva() + "\n" +
    "- Costo de envío: $" + pedido.envio + "\n" +
    "Total = $" + pedido.total
);

let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<div class="container bkgnTotal">
                                <h3> Total:$ ${pedido.total}</h3>
                                <p>  Producto: ${pedido.libro}</p>
                                <p> Envio:$ ${pedido.envio}</p>
                                
                            </div>`;

    document.body.appendChild(contenedor); */

    function cantidadPedido() {
        for (libro of arrayPedidos)
        if (id=== id){
            cantidad = cantidad + cantidad;
            console.log("cantidad de estes libro" + cantidad);
            console.log
            

        }
        
    }