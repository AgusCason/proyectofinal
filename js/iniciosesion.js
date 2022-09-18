const btnIS = document.getElementById("btnIS").addEventListener("click", inicioSesion) ;



function inicioSesion() {
    const datosUsuarios = JSON.parse(localStorage.getItem("DatosUsuarios"));
    const usuario = document.getElementById("usuario").value//.toLowerCase() ;
    const contraseña = document.getElementById("contraseña").value//.toLowerCase() ;
    const resultadoUsuario = datosUsuarios.some( DatosUsuarios => DatosUsuarios.usuario  === usuario ) ;
    const resultadoContraseña = datosUsuarios.some( DatosUsuarios => DatosUsuarios.contraseña  === contraseña ) ;
    const cantidadUsuarios = 0;
    localStorage.setItem("cantidadUsuarios", cantidadUsuarios) ;

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