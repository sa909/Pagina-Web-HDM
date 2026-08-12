tema: revista digital para estar al dia con la tecnologia sin aburrirse

LEEME – Revista Digital
¿Qué hice?
Para este trabajo hice una página web en forma de revista digital sobre cómo usar la tecnología sin aburrirse.
La idea fue hacer una página sencilla, pero que tuviera información, un poco de diseño y también alguna parte interactiva.
¿Cómo la hice?
Primero empecé haciendo la página en HTML. Ahí fui colocando el título principal, los subtítulos y los párrafos con información sobre la tecnología.
Por ejemplo, para poner un título utilicé:
<h1>Como usar la Tecnologia sin Aburrirse</h1>
Y para agregar información utilicé párrafos:
<p>
    La tecnología forma parte de nuestra vida diaria y puede ser
    una herramienta muy útil para aprender y divertirse.
</p>
Después hice el CSS, que fue la parte donde le di formato a la página. Cambié el color del fondo, el tamaño y color de las letras y también acomodé los textos para que la página se viera más ordenada.
Por ejemplo, utilicé:
body {
    background-color: #E0F7FA;
    font-family: Arial, sans-serif;
}
También le puse diferentes tamaños y colores a los títulos y a los párrafos.
Por último agregué JavaScript. Como no quería hacer algo demasiado complicado, agregué un botón que muestra un mensaje cuando se hace clic.
Para eso utilicé:
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    alert("¡Gracias por visitar nuestra revista digital!");
});
¿Cómo quedó?
Al terminar junté las tres partes:
•	HTML para escribir y ordenar la información.
•	CSS para darle diseño a la página.
•	JavaScript para agregar una pequeña interacción.
Después probé la página para asegurarme de que los textos, el diseño y el botón funcionaran correctamente.
Finalmente obtuve una revista digital sencilla sobre el uso de la tecnología. Intenté que fuera fácil de leer, que tuviera un diseño agradable y que además tuviera una pequeña función hecha con JavaScript.
Con este trabajo aprendí cómo se pueden combinar HTML, CSS y JavaScript para crear una página web.
