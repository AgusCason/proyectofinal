const btnAgregarUsuarios = document.getElementById('btn-continuar').addEventListener("click", crearUsuario) ;
const btnCancelar = document.getElementById('btn-cancelar').addEventListener("click", cancelar) ;
let cantidadUsuarios = 0 ;





function crearUsuario (){
    const nusuario = document.getElementById("add-profile-name").value ;
    let cantidadUsuarios = localStorage.getItem("cantidadUsuarios") ;
    cantidadUsuarios++ ;
    if(cantidadUsuarios===1){
        const usuarioUno = nusuario ;
        localStorage.setItem("usuarioUno", usuarioUno) ;
        localStorage.setItem("cantidadUsuarios", cantidadUsuarios) ;
        window.location="usuarios.html" ; 
    }else if(cantidadUsuarios===2){
        const usuarioDos = nusuario ;
        localStorage.setItem("usuarioDos", usuarioDos) ;
        localStorage.setItem("cantidadUsuarios", cantidadUsuarios) ;
        window.location="usuarios.html" ; 
    }else if(cantidadUsuarios===3){
        const usuarioTres = nusuario ;    
        localStorage.setItem("usuarioTres", usuarioTres) ;
        localStorage.setItem("cantidadUsuarios", cantidadUsuarios) ;
        window.location="usuarios.html" ; 
    }else if(cantidadUsuarios===4){
        const usuarioCuatro = nusuario ;    
        localStorage.setItem("usuarioCuatro", usuarioCuatro) ;
        localStorage.setItem("cantidadUsuarios", cantidadUsuarios) ;
        window.location="usuarios.html" ; 
    }else if(cantidadUsuarios > 4){
        console.warn("No se pueden guardar mas usuarios") ;
        window.location="usuarios.html" ; 
    }
}

function cancelar (){
    window.location="usuarios.html" ;
}