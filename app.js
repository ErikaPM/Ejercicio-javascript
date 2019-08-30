let numero = true;
let contador = 0;
let valor;

//hacer una variable para imprimir que incluya la variable de valor
//hacer un if que me bloquee si no va en el numero consecutivo
//revisar como hacer que el contador me sume los datos acumulados

let boton = global => {
    if (contador >= 4) {
        numero = false;
    }
    global();
    contador++;
}

var mostrar1 = () => {
    if (numero == true) {
        valor = 1;
    }
    else {
        valor = 'A'
    }
};

var mostrar2 = () => {
    if (numero == true) {
        valor = 2;
    }
    else {
        valor = 'B';
    }
};

var mostrar3 = () => {
    if (numero == true) {
        valor = 3;
    }
    else {
        valor = 'C';
    }
};

var mostrar4 = () => {
    if (numero == true) {
        valor = 4;
    }
    else {
        valor = 'D';
    }
};





// function () {
//     if (this.onclick == true); {
//         alert('lalala');

//     }

// };


// object.onclick = function () {
//     alert('tu numero es ' + "numero")

// };

// function numero2() {
//     alert('tu numero es ' + 2)
// };


// function acumular(numero1, numero2) {
//     alert("numero " + numero1 + numero2)
// }

// console.log(acumular);






// Function(numero){
//     for (let i = 0; i <= 10; i++) {
//         arregloNumeros(i);
//     }
// }

// Function(letras){
//     for (let i = 0; i <= 10; i++) {
//         console.log(i);
//     }

// // }



// for (let i = 0; i <= 5; i++) {
//     //     console.log(i);
//     // }


//     object.onclick = function (numero, arregloNumeros) {
//         if (numero == true) {
//             alert("1");
//         } else {
//             alert("error");
//         }
//     };

