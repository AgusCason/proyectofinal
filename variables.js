const usuario = "" ;
const contraseña = "" ;
const btnIS = document.getElementById("btnIS").addEventListener("click", inicioSesion) ;
const btnR = document.getElementById("btnR").addEventListener("click", registrar) ;
const arrayUsuarios = ["acas"] ;
const arrayContraseñas = ["acas"] ;
const datosUsuarios = [""] ;





function registrar() {
    const nombre = document.getElementById("nombre").value.toLowerCase() ;
    const apellido = document.getElementById("apellido").value.toLowerCase() ;
    const nomususario = document.getElementById("nomususario").value.toLowerCase() ;
    const email = document.getElementById("email").value.toLowerCase() ;
    const nuevcontraseña = document.getElementById("nuevcontraseña").value.toLowerCase() ;
    const repetcontraseña = document.getElementById("repetcontraseña").value.toLowerCase() ;
    const checkNomUsuario = arrayUsuarios.some( arrayUsuarios => arrayUsuarios  === nomususario ) ;
    const checkEmail = datosUsuarios.some( datosUsuarios => datosUsuarios  === email ) ;
    
    guardarDatosLS() ;
    guardarDatos() ;

    if( checkEmail === false ){
        if( checkNomUsuario === false ){
            
            arrayUsuarios.push(nomususario);
            if( nuevcontraseña === repetcontraseña ){
                //contraseña = repetcontraseña ;
                arrayContraseñas.push(repetcontraseña);
                console.log("Bienvenid@!", nombre,) ;    
            }else{
                console.log("Sus contraseñas no coinciden, vuelva a repetir el paso") ; 
            }
        }else{
            console.log("El nombre de usuario ya fue utilizado, porfavor vuelva a ingresar un nuevo usuario") ; 
        } 
    }else{
        console.log("Ya existe una cuenta registrada a ese mail") ; 
    }
}

function guardarDatosLS(){
    localStorage.setItem("Nombre", nombre.value);
    localStorage.setItem("Apellido", apellido.value);
    localStorage.setItem("Usuario", nomususario.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Contraseña", repetcontraseña.value);
}

function    guardarDatos(){
    if( nombre.value != "" && apellido.value != "" && nomususario.value != "" && email.value != "" && repetcontraseña.value != "" ){
        datosUsuarios.push(new DatosUsuarios(nombre.value, apellido.value, nomususario.value, email.value, repetcontraseña.value)) ;
        localStorage.setItem("DatosUsuarios", JSON.stringify(datosUsuarios)) ;
    }
}


function inicioSesion() {
    const usuario = document.getElementById("usuario").value.toLowerCase() ;
    const contraseña = document.getElementById("contraseña").value.toLowerCase() ;
    const resultadoUsuario = arrayUsuarios.some( arrayUsuarios => arrayUsuarios  === usuario ) ;
    const resultadoContraseña = arrayContraseñas.some( arrayContraseñas => arrayContraseñas  === contraseña ) ;

    if ( resultadoUsuario === true && resultadoContraseña === true ){
        window.location="usuarios.html"; 
    }else if( resultadoUsuario === true && resultadoContraseña === false ){

    }else if( resultadoUsuario === false && resultadoContraseña === true ){

    }else{

    }
}