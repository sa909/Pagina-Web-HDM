const boton = document.getElementById("agregar");

boton.addEventListener("click", function(){

    const texto = document.getElementById("tarea").value;

    const li = document.createElement("li");

    li.textContent = texto;

    document.getElementById("lista").appendChild(li);

});