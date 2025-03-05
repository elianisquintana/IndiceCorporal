//alert("estoy vinculado")

let inputPesoUsuario=document.getElementById("pesousuario")
let inputAlturaUsuario=document.getElementById("alturausuario")
let botonFormulario=document.getElementById("boton")


// detectando de clic eventos en pantalla
// un evento es una interaccion del usuario (humano) con el codigo ()
botonFormulario.addEventListener("click", function(evento){


    //1. se inicia desactivando el comportamiento por defecto
    evento.preventDefault()

    //2. probamos que el evento se esta escuchando con exito
    //3. creamos variables para almacenar los datos de usuario
    let estaturaUsuario=inputAlturaUsuario.value
    let pesoUsuario=inputPesoUsuario.value

//4. se crea una variable para el resultado
let resultado=document.getElementById("resultado")
//5. se modifica el resultado con los value

//6. se calcula lo pedido
let calculoIMC=pesoUsuario/(estaturaUsuario*estaturaUsuario)

//6A se crea variable para almacenar la imagen
let imagen=document.getElementById("foto")


//7. se debe decidir sobre el resultado
if(calculoIMC<18.5){
resultado.textContent="Estas bajo de peso"
imagen.src="./img/bajopeso.png"
}
else if(calculoIMC>=18.5 && calculoIMC<24.9){
resultado.textContent="Estas melo, felicitaciones"
}
else if(calculoIMC>24.9 && calculoIMC<29.9){
  resultado.textContent="tienes sobre peso"
}
else if(calculoIMC>29.9 && calculoIMC<34.9){
resultado.textContent="estas obeso"
}
else{
  resultado.textContent="estrema obesidad"
}




    
    /*Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });*/
})