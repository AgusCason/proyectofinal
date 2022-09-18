const btnIS = document.getElementById("btnIS").addEventListener("click", inicioSesion) ;







/*
function recuperarLS() {
    if(localStorage.DatosUsuarios){
        const DatosUsuarioGuardados = JSON.parse(localStorage.getItem("DatosUsuarios"));
        console.table(DatosUsuarioGuardados);
    }
}
*/




function inicioSesion() {
    //recuperarLS () ;
    console.log("Entro")
    const datosUsuarios = JSON.parse(localStorage.getItem("DatosUsuarios"));
    console.table(datosUsuarios);
    const usuario = document.getElementById("usuario").value//.toLowerCase() ;
    console.log(usuario);
    const contraseña = document.getElementById("contraseña").value//.toLowerCase() ;
    console.log(contraseña);
    const resultadoUsuario = datosUsuarios.some( DatosUsuarios => DatosUsuarios.usuario  === usuario ) ;
    const resultadoContraseña = datosUsuarios.some( DatosUsuarios => DatosUsuarios.contraseña  === contraseña ) ;
    console.log(resultadoUsuario, "tambien", resultadoContraseña);

   /* if ((usuario === resultadoUsuario) && (contraseña === resultadoContraseña)){
        window.location="usuarios.html";  
    }else if((usuario != resultadoUsuario) || (contraseña != resultadoContraseña)){

    }*/


    if ( (resultadoUsuario === true) && (resultadoContraseña === true) ){
        window.location="usuarios.html"; 
    }else if( ((resultadoUsuario === true) && (resultadoContraseña === false)) || ((resultadoUsuario === false) && (resultadoContraseña === true)) || ((resultadoUsuario === false) && (resultadoContraseña === false))  ){
        console.log("Usuario o Contraseña Incorrectos")
    }
}