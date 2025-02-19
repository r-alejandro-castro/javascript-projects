/* 1) Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). Si el parámetro de la operación no es válido que mande un error personalizado a la consola.*/

// function ejercicioUno (a, b, operation) {
//     switch (operation) {
//         case 'sumar':
//             return console.log(a + b);
//         case 'restar':
//             return console.log(a - b);
//         case 'dividir':
//             return console.log(a / b);
//         case 'multiplicar':
//             return console.log(a * b);
//         default:
//             return console.log('Operación no válida');  
//     }
// }

// const ejercicioUno = (a,b, operation) => {
//     const operations = {
//         sumar: () => console.log(a + b),
//         restar: () => console.log(a - b),
//         dividir: () => console.log(a / b),
//         multiplicar: () => console.log(a * b)
//     };
    
//     if (operations[operation]) {
//         operations[operation]();
//         console.log("Operación correcta");
//     } else {
//         console.log("Operación no válida");
//     }
// }

//Ejemplos de uso:

// ejercicioUno(5, 3, 'sumar'); // 8
// ejercicioUno(3, 5, 'restar'); // 2
// ejercicioUno(5, 3, 'dividir'); // 1.666...
// ejercicioUno(5, 3, 'multiplicar'); // 15
// ejercicioUno(5, 3, 'invalid'); // Operación no válida

// -----------------------------------------------------

/* 2) Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.*/

// const ejercicioDos = (a = 0, b = 0) => {
//     let arreglo = [];
//     for (let i = a; i<=b; i++) {
//         if (i % 2 === 0) arreglo.push(i);
//     }
//     console.log(arreglo)    
// }

//Ejemplos de uso:

// ejercicioDos(2,8)
// ejercicioDos(2,100)
// ejercicioDos(2)

// -----------------------------------------------------

/* 3) Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicación de a * 5.*/

// const ejercicioTres  = ( a= 0, b = 10) => {
//     let result;
//     for ( let i = 0; i<=b; i++){
//       result = a * i;
//     if ( i !== 5 ) console.log(`${a} x ${i} = ${result}`)
//     }
//   }
  
//   ejercicioTres(1,10)

// -----------------------------------------------------

/* 4) Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100. */

// const ejercicioCuatro = () => {
//     let arreglo = [];
//     let multiplo = [];
//   for (let i = 1; i <= 100; i++){
//     arreglo.push(i)
//   } 
//     console.log(`Este es el arreglo principal: ${arreglo}`)
//     arreglo.filter((el) => {
//         if (el % 3 === 0) multiplo.push(el)
//     });
//     console.log(multiplo)
// }

// ejercicioCuatro();

// -----------------------------------------------------

/* 5) Hacer una función que haga de forma aleatoria un número entre 1 y 1000, y que a ese número le saqué su mitad, el doble y su raíz cuadrada. */

// const ejercicioCinco = () => {
//     const numero = Math.floor(Math.random() * (1000 - 1)) + 1;
//     const number = {
//         numero: numero,
//         mitad: numero / 2,
//         doble: numero * 2,
//         raiz: Math.sqrt(numero)
//     };
//     console.log(number);
//     console.log(`El numero es ${numero}`);
//     console.log(`La mitad es ${number.mitad}, el doble es ${number.doble} y la raíz cuadrada es ${number.raiz}`);
// };

// ejercicioCinco();

// -----------------------------------------------------

/* 6) Hacer una función que, dado como dato de entrada nuestra fecha de cumpleaños, nos diga cuantos días faltan para el mismo.*/

// const ejercicioSeis = (a) => {
//     const cumple = new Date(a);
//     const day = new Date();
//     const diasRestantes = Math.floor((cumple.getTime() - day.getTime()) / (1000 * 60 * 60 * 24));
//     console.log(`El resto de días son ${diasRestantes}`);
// };

// ejercicioSeis('13 dec 2025');

// -----------------------------------------------------

/* 7) Realizar una función que, dado como dato de entrada una oración, nos devuelva un arreglo que contenga todas las palabras usadas en la oración. */

// const ejercicioSiete = (text = "Hola mundo") => {
//     const word = text.split("");
//     console.log(word)
// }

// ejercicioSiete()

// -----------------------------------------------------

/* 8) Crea 5 objetos y almacénalos en un arreglo, debes hacer una función para filtrar a todas las personas que tengan el nombre Luis y que esa misma función también muestre cuales son mayores de edad. */

// const names = [
//     { name: "Luis", apellido: "Contreras",  age: 25 },
//     { name: "Maria", apellido: "Hernan", age: 18 },
//     { name: "Juan",  apellido: "Rojas", age: 15 },
//     { name: "Pedro", apellido: "Mejias",age: 40 },
//     { name: "Carlos", apellido: "Castro",age: 16 },
// ];

// const ejercicioOcho = () => {
//     const persona = names
//     const filter = persona.filter((el) => {
//         if (el.name === "Luis") console.log(`El nombre es ${el.name} ${el.apellido}`)
//     });
//     const filterage = persona.filter((age) => {
//         if (age.age >= 18) console.log(`Las personas mayores de edad son ${age.name} ${age.apellido}`)
//     });
// }

// ejercicioOcho()

// -----------------------------------------------------

/* 9) Realizar una función que nos diga la fecha de apertura de un examen de la universidad, es decir, la cantidad de horas restantes que faltan para que abra dicho examen. En caso de que el examen haya cerrado que nos retorne un mensaje que diga “El examen ya cerró”. */

// const ejercicioNueve = (open = "", close = "") => {
//     if (open === '' || close === '') return console.error("Faltan parametros");
//     else {
//         const today = new Date();
//         const openDate = new Date(open);
//         const closeDate = new Date(close);
        
//         const resultTimeOpen = Math.floor((closeDate.getTime() - openDate.getTime()) / (1000 * 60 * 60));
//         const resultTimeClose = Math.floor((openDate.getTime() - today.getTime()) / (1000 * 60 * 60));

//         if (closeDate.getTime() < today.getTime()) console.log("El examen ya cerró");
//         else {
//             if (resultTimeOpen > 0) console.log(`Quedan ${resultTimeOpen} horas para que el examen se abra`);
//             else {
//                 console.log("El examen esta abierto");
//                 console.log(`Quedan ${resultTimeClose} horas`);
//             }
//         }
//     }
// }

// ejercicioNueve('Wed Feb 20 2025 08:00','Wed Feb 20 2025 09:00');

// ----------------------------------------------

/* 10) En un arreglo tenemos varios valores numéricos, debemos de hacer una función que nos elimine aquellos valores que se encuentran repetidos.*/

// const numbers = [1,3,4,3,5,4,7,8,2,0,2]

// const ejercicioDiez = (numbers) => {

//     // Ordenar los números
//     const number = numbers.sort((a, b) => a - b);
    
//     // Primer método: Usando filter y indexOf
//     const result = number.filter((item, index) => {
//         return number.indexOf(item) === index
//     })
//     console.log(`Arreglo original: ${number}`)
//     console.log(result)
    
//    // Segundo método: Usando Set (mas recomendado)
//     const newNumbers = new Set(number);
//     const result2 = [...newNumbers];
//     console.log(result2);
// }

// ejercicioDiez(numbers)