let pagina = document.getElementById("pagina");

// nombres de las secciones
let secciones = ["Inicio", "Calculadora", "Información"];

// barra de navegación
let nav = document.createElement("nav");


// for para crear los botones del menu
for (let i = 0; i < secciones.length; i++) {

    let boton = document.createElement("button");

    boton.textContent = secciones[i];

    boton.onclick = function() {
        mostrar(secciones[i]);
    };

    nav.appendChild(boton);
}

pagina.appendChild(nav);


// funcion para mostrar una sección
function mostrar(seccion) {

    while (pagina.children.length > 1) {
        pagina.removeChild(pagina.lastChild);
    }


    // switch para elegir la sección
    switch (seccion) {

        case "Inicio":

            let inicio = document.createElement("section");

            let titulo = document.createElement("h1");
            titulo.textContent = "Bienvenido";

            let texto = document.createElement("p");
            texto.textContent = "Esta es nuestra página de calculadora.";

            inicio.appendChild(titulo);
            inicio.appendChild(texto);

            pagina.appendChild(inicio);

            break;


        case "Calculadora":

            crearCalculadora();

            break;


        case "Información":

            let info = document.createElement("section");

            let tituloInfo = document.createElement("h1");
            tituloInfo.textContent = "Información";

            let textoInfo = document.createElement("p");
            textoInfo.textContent = "La calculadora realiza suma, resta, multiplicación y división.";

            info.appendChild(tituloInfo);
            info.appendChild(textoInfo);

            pagina.appendChild(info);

            break;
    }
}


// funcion para crear la calculadora
function crearCalculadora() {

    let seccion = document.createElement("section");

    let titulo = document.createElement("h1");
    titulo.textContent = "Calculadora";

    let numero1 = document.createElement("input");
    numero1.id = "numero1";
    numero1.type = "number";
    numero1.placeholder = "Primer número";

    let numero2 = document.createElement("input");
    numero2.id = "numero2";
    numero2.type = "number";
    numero2.placeholder = "Segundo número";


    seccion.appendChild(titulo);
    seccion.appendChild(numero1);
    seccion.appendChild(numero2);

    seccion.appendChild(document.createElement("br"));



    let operaciones = ["+", "-", "*", "/"];


    // for para los botones
    for (let i = 0; i < operaciones.length; i++) {

        let boton = document.createElement("button");

        boton.textContent = operaciones[i];

        boton.onclick = function() {
            calcular(operaciones[i]);
        };

        seccion.appendChild(boton);
    }


    let resultado = document.createElement("h2");
    resultado.id = "resultado";
    resultado.textContent = "Resultado:";

    seccion.appendChild(resultado);

    pagina.appendChild(seccion);
}


// funcion para hacer las cuentas
function calcular(operacion) {

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado;


    // if para comprobar los números
    if (isNaN(numero1) || isNaN(numero2)) {

        document.getElementById("resultado").textContent =
            "Resultado: Ingrese dos números";

    } else {

        // Switch para elegir la operación
        switch (operacion) {

            case "+":
                resultado = numero1 + numero2;
                break;

            case "-":
                resultado = numero1 - numero2;
                break;

            case "*":
                resultado = numero1 * numero2;
                break;

            case "/":

                if (numero2 == 0) {
                    resultado = "No se puede dividir por 0";
                } else {
                    resultado = numero1 / numero2;
                }

                break;
        }

        document.getElementById("resultado").textContent =
            "Resultado: " + resultado;
    }
}

mostrar("Inicio");
