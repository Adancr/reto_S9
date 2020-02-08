// let edad = prompt('Ingresa tu edad');
// debugger;

// if (edad  >= 18) {
//   alert("tu eres mayor de 18, adelante");
// } else {
//   alert('tu no eres mayor de 18, no puedes ingresar');
// }

// if (edad  >= 18) {
//   alert("tu eres mayor de 18, adelante");
// } else if (edad > 4 && edad < 10) {
//   alert('tu edad esta entre 4 y 10');
// } else {
//   alert('Tu edad no esta nuestro rango')
// }

// let fruta = prompt('Ingresa la Fruta que deseas');
// debugger;

//  switch(fruta) {
//    case 'uva' :
//      console.log('El usuario elgio la fruta uva');
//      break; /* salir del flujo si cumple condicion */
//    case 'fresa' :
//      console.log('El usuario elgio la fruta fresa');
//      break
//    case 'platano' :
//      console.log('El usuario elgio la fruta platano');

//      default:
//        console.log('no contamos con la fruta');


//  }
/********************* */
// let sexo = prompt('Ingresa tu sexo');

// debugger;

// (sexo == f) ? alert('Eres mujer!!') : alert('Eres hombre!!');

/***************** */

// function suma(a, b) {

//     if (arguments.length > 2) {
//         throw new Error('La funcion no soporta')
//     }
//     return a + b;
// }




// console.log(suma(2, 7));  //este soporta solo 2 argumnetos

// control flujo 
// function setName(name) {
//     debugger;
//     let message = "";
//     try {
//         if (name.lenght < 6) {
//             throw 'SHORT'
//         } else if (name.lenght > 10) {
//             throw 'LONG'
//         }

//         message = `El nombre es correcto y es ${name}`;
//     } catch (error) {
//         if (error == 'SHORT') {
//             message = `El nombre  ${name} es demasiado corto`;
//         } else if (error == 'LONG') {
//             message = `El nombre ${name} es demasiado largo`;
//         } finally {
//             console.log("El mensaje es", message);
//         }
//     }
// }
// setName("ana");

/**arrays**/
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombres = ['andres', 'abel', 'juan', 'cristina'];
let nombreYnumeros = [1, 2, 'luis', 'cristina']

// Object 
let user = {
    name: 'adan',
    age: '27',
    sex: 'm'
}