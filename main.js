// Ejercicio 1
// Escribe una función que muestre por consola "Hello World".
 
function Hi() {
     console.log("Hello world");
}

Hi();

// Ejercicio 2
// Escribe una función que devuelva el cuadrado de un número.

let number = 5;

function square() {
    return console.log(number**2);;
}

square();

// Ejercicio 3
// Escribe una función que acepte un nombre como parámetro y salude específicamente a esa persona.
// Ejemplo: "Hi, Anna".


let userName = "jesus";

function sayHello () {
    return console.log("Hi, " + userName);
}

sayHello();

// Ejercicio 4
// Escribe una función que reciba dos parámetros, el nombre y el apellido, y devuelva el nombre completo.

let userName2 = 'jesus';
let lastName = 'aleman';


function fullName() {
    return console.log(userName, ' ' + lastName);
}

fullName();

// Ejercicio 5
// Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3.

// let large = prompt('Ingrese el largo del rectangulo');
// let width = prompt('Ingrese el ancho del rectangulo');

function areaRectangle (L=5, W=3) {

    return  console.log(L*W);    
}

areaRectangle();

// Ejercicio 6
// Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit.

let degreesCelcius = 44;

function degreesF () {

    return console.log((degreesCelcius*9)/5+32);
}

degreesF();

// Ejercicio 7
// Escribe una función que acepte dos números, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().

let max = 99;
let min= 50;

function numberRandom (min,max) {
    return Math.floor(Math.random()*(max - min) + min );
}

console.log(numberRandom( min, max));

// Ejercicio 8
// Escribe una función que calcule el área de un círculo si se le proporciona el radio.

let r= prompt('Ingrese el radio del circulo');

function areaCircle() {
    return Math.PI * (r**2);
}

console.log(areaCircle());

// Ejercicio 9
// El Índice de Masa Corporal (IMC) se calcula del siguiente modo: peso (en kilogramos) / altura al cuadrado (en metros). Escribe una función que acepte ambos datos y calcule el IMC. A countinuación, deberá devolver un log con lo recibido.

let weight = prompt('ingrese su peso en kilogramos')
let hight = prompt('ingrese su altura en metros')

function imcCalculation () {
    
    return weight / (hight**2)
}

console.log('su imc es ' + imcCalculation(weight,hight));

// Ejercicio 10
// Escribe una función que acepte un dato y compruebe qué tipo de dato es. Tienes que usar un prompt para pedir dichio dato.

let data = 2;

function verifyData () {
    return typeof data
}

console.log(verifyData (data));

// Ejercicio 11
// Escribe una función que te adivine el futuro. Recibirá como parámetros:

// Número de hijos.
// Nombre de la pareja.
// Nombre de una ciudad.
// Un trabajo. La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>, y tendrás <<número de hijos>> hijos con <<pareja>>.". Deberás usar template literals para ello.

let children  = ["1","2","3","4","5"];
let couple = ["Maria","carla","Elga","Josefina","Valeria"];
let city = ["Madrid","Barcelona","Gijon","Maracaibo"];
let work = ["Desarrollador","Repartidor","Ingeniero","Electricista"];



function fortuneTeller(a,b,c,d) {
  
  let workAssigned = Math.floor(Math.random()*work.length)
  let cityLiving = Math.floor(Math.random()*city.length)
  let numberChildren = Math.floor(Math.random()*children.length)
  let nameCouple = Math.floor(Math.random()*couple.length)

      return console.log(`Trabajaras en ${city[cityLiving]}, trabajando como ${work[workAssigned]}, y tendras ${children[numberChildren]} hijo/s con ${couple[nameCouple]}`);
}
console.log(fortuneTeller());