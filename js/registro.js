const btnR = document.getElementById("btnR").addEventListener("click", registrar) ;
const arrayUsuarios = [""] ;
const arrayContraseñas = [""] ;
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
                window.location="sesion.html";     
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

