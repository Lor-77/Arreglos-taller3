function mostrar(dato){
    switch(dato) {
        case 1:
         document.getElementById("Ejercicio1").style.display="block";
         document.getElementById("Ejercicio2").style.display="none";
         document.getElementById("Ejercicio3").style.display="none";
         document.getElementById("Ejercicio4").style.display="none";
         document.getElementById("Ejercicio5").style.display="none";
         document.getElementById("Ejercicio6").style.display="none";
         document.getElementById("Ejercicio7").style.display="none";
        break;
        case 2:
         document.getElementById("Ejercicio1").style.display="none";
         document.getElementById("Ejercicio2").style.display="block";
         document.getElementById("Ejercicio3").style.display="none";
         document.getElementById("Ejercicio4").style.display="none";
         document.getElementById("Ejercicio5").style.display="none";
         document.getElementById("Ejercicio6").style.display="none";
         document.getElementById("Ejercicio7").style.display="none";
        break;
        case 3:
         document.getElementById("Ejercicio1").style.display="none";
         document.getElementById("Ejercicio2").style.display="none";
         document.getElementById("Ejercicio3").style.display="block";
         document.getElementById("Ejercicio4").style.display="none";
         document.getElementById("Ejercicio5").style.display="none";
         document.getElementById("Ejercicio6").style.display="none";
         document.getElementById("Ejercicio7").style.display="none";
        break;
        case 4:
         document.getElementById("Ejercicio1").style.display="none";
         document.getElementById("Ejercicio2").style.display="none";
         document.getElementById("Ejercicio3").style.display="none";
         document.getElementById("Ejercicio4").style.display="block";
         document.getElementById("Ejercicio5").style.display="none";
         document.getElementById("Ejercicio6").style.display="none";
         document.getElementById("Ejercicio7").style.display="none";
        break;
        case 5:
         document.getElementById("Ejercicio1").style.display="none";
         document.getElementById("Ejercicio2").style.display="none";
         document.getElementById("Ejercicio3").style.display="none";
         document.getElementById("Ejercicio4").style.display="none";
         document.getElementById("Ejercicio5").style.display="block";
         document.getElementById("Ejercicio6").style.display="none";
         document.getElementById("Ejercicio7").style.display="none";
        break;
        case 6:
         document.getElementById("Ejercicio1").style.display="none";
         document.getElementById("Ejercicio2").style.display="none";
         document.getElementById("Ejercicio3").style.display="none";
         document.getElementById("Ejercicio4").style.display="none";
         document.getElementById("Ejercicio5").style.display="none";
         document.getElementById("Ejercicio6").style.display="block";
         document.getElementById("Ejercicio7").style.display="none";
        break;
        case 7:
         document.getElementById("Ejercicio1").style.display="none";
         document.getElementById("Ejercicio2").style.display="none";
         document.getElementById("Ejercicio3").style.display="none";
         document.getElementById("Ejercicio4").style.display="none";
         document.getElementById("Ejercicio5").style.display="none";
         document.getElementById("Ejercicio6").style.display="none";
         document.getElementById("Ejercicio7").style.display="block";
        break;







}}

function Eje1(){ 
 let números= [9,8,7,6,5];
 console.log(números);
 document.getElementById("resultado").innerHTML= números ;
 }  

 function Eje2() {
  const valores = [12, 4, 6, 8, 14, 11, 6, 3, 4, 1];
  let suma = 0;
  
  for (let i = 0; i < valores.length; i++) {
    suma += valores[i];
    console.log(i, valores[i], suma);
  }  
   
  const media = suma / valores.length;
  document.getElementById("resultado").innerHTML = valores+ "="+suma +"</br>"+  "Media de los valores="+ media;
}

function Eje3() {
    // 1. Pedir al usuario el tamaño del array y el número base
    let tamaño = Number(prompt("Indique el tamaño del array:"));
    let n_base = Number(prompt("Elija el número base:"));

    // 2. Crear el array vacío donde se guardarán los múltiplos
    let multiplos = [];

    // 3. Usar un bucle para llenar el array con los múltiplos
    for (let i = 1; i <= tamaño; i++) {
        multiplos.push(n_base * i);
    }

    document.getElementById("resultado").innerHTML = 
        "Los múltiplos de " + n_base + " son: " + multiplos.join(", ");}

  
function Eje4() {
    // 1. Definir un array de ejemplo
    let numeros = [5, 7, 3, 7, 9, 7];

    // 2. Preguntar al usuario el número a buscar
    let buscado = Number(prompt("¿Qué número quieres buscar en el array?"));

    // 3. Crear un arreglo para guardar las posiciones encontradas
    let posiciones = [];

    // 4. Recorrer el array y buscar coincidencias
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === buscado) {
            posiciones.push(i); 
        }
    }

    
    if (posiciones.length > 0) {
        document.getElementById("resultado").innerHTML =
            "El número " + buscado + " se encontró en las posiciones: " + posiciones.join(", ");
    } else {
        document.getElementById("resultado").innerHTML =
            "El número " + buscado + " no se encontró en el array.";
    }
}        

function Eje6() {
    // 1. Definimos la matriz (array multidimensional)
    let matriz = [
        [3, 5],   // fila 1
        [4, 4],   // fila 2
        [7, 2],   // fila 3
        [10, 15]  // fila 4 (puedes agregar más filas)
    ];

    // 2. Recorremos la matriz y calculamos la suma
    let resultado = "";
    for (let i = 0; i < matriz.length; i++) {
        let a = matriz[i][0]; // primer número de la fila
        let b = matriz[i][1]; // segundo número de la fila
        let suma = a + b;
        resultado += a + " + " + b + " = " + suma + "<br>";
    }

    
    document.getElementById("resultado").innerHTML = resultado;
}

function Eje7() {
    // 1. Definimos el tamaño de la tabla (por ejemplo, del 1 al 10)
    let filas = 10;   // tablas del 1 al 10
    let columnas = 10; // multiplicar hasta 10
    let matriz = [];

    // 2. Llenamos la matriz con los resultados de las multiplicaciones
    for (let i = 1; i <= filas; i++) {
        matriz[i] = []; // inicializamos cada fila
        for (let j = 1; j <= columnas; j++) {
            matriz[i][j] = i * j;
        }
    }

    // 3. Construimos el resultado en formato de texto
    let resultado = "";
    for (let i = 1; i <= filas; i++) {
        for (let j = 1; j <= columnas; j++) {
            resultado += i + " x " + j + " = " + matriz[i][j] + "<br>";
        }
        resultado += "<hr>"; 
    }

    document.getElementById("resultado").innerHTML = resultado;
}

