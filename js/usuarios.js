const contenedorUsuarios = document.querySelector("#usuarios-contenedor") ;
let contenidoHTML = "" ;
let cantidadUsuarios = 0;

const usuarioUno = localStorage.getItem("usuarioUno") ;
const usuarioDos = localStorage.getItem("usuarioDos") ;
const usuarioTres = localStorage.getItem("usuarioTres") ;
const usuarioCuatro = localStorage.getItem("usuarioCuatro") ;

window.onload = cantus();
window.onload = leerUsuarios();


function cantus(){let cantidadUsuarios = 0;}

function leerUsuarios (){
    let cantidadUsuarios = localStorage.getItem("cantidadUsuarios") ;
    let nUs = cantidadUsuarios ;
    console.log(cantidadUsuarios);
    if ( cantidadUsuarios == 0){
        contenedorUsuarios.innerHTML = `
                                            <div class="usuario usuario-4 card-agregarusuario btn-addus">
                                              <a href="agregarusuario.html"><img src="img/usuarios/4.png" alt="usuario-4"></a>
                                              <a href="agregarusuario.html"><p>Agregar Perfil</p></a>
                                            </div>
                                        `
    }else if ( cantidadUsuarios == 1 ){
        contenedorUsuarios.innerHTML = `
                                            <div class="usuario usuario-1 btn-card1-style1">
                                              <a href="portalus.html"><img src="img/usuarios/1.png" alt="usuario-1" id="usUno"></a>
                                              <a href="portalus.html"><p>${usuarioUno}</p></a>
                                            </div>
                                            <div class="usuario usuario-4 card-agregarusuario btn-style4">
                                              <a href="agregarusuario.html"><img src="img/usuarios/4.png" alt="usuario-4"></a>
                                              <a href="agregarusuario.html"><p>Agregar Perfil</p></a>
                                            </div>
                                        `
    }
    else if ( cantidadUsuarios == 2 ){
        contenedorUsuarios.innerHTML = `
                                            <div class="usuario usuario-1 btn-card1-style2">
                                              <a href="portalus.html"><img src="img/usuarios/1.png" alt="usuario-1" id="usUno"></a>
                                              <a href="portalus.html"><p>${usuarioUno}</p></a>
                                            </div>
                                            <div class="usuario usuario-1 btn-style4">
                                              <a href="portalus.html"><img src="img/usuarios/2.png" alt="usuario-1" id="usDos"></a>
                                              <a href="portalus.html"><p>${usuarioDos}</p></a>
                                            </div>
                                            <div class="usuario usuario-4 card-agregarusuario btn-style4">
                                               <a href="agregarusuario.html"><img src="img/usuarios/4.png" alt="usuario-4"></a>
                                               <a href="agregarusuario.html"><p>Agregar Perfil</p></a>
                                            </div>
                                        `
    } 
    else if ( cantidadUsuarios == 3 ){
        contenedorUsuarios.innerHTML = `
                                            <div class="usuario usuario-1 btn-card1-style3">
                                                <a href="portalus.html"><img src="img/usuarios/1.png" alt="usuario-1" id="usUno"></a>
                                                <a href="portalus.html"><p>${usuarioUno}</p></a>
                                            </div>
                                            <div class="usuario usuario-1 btn-style4">
                                                <a href="portalus.html"><img src="img/usuarios/2.png" alt="usuario-1" id="usDos"></a>
                                                <a href="portalus.html"><p>${usuarioDos}</p></a>
                                            </div>
                                            <div class="usuario usuario-1 btn-style4">
                                                <a href="portalus.html"><img src="img/usuarios/3.png" alt="usuario-1" id="usTres"></a>
                                                <a href="portalus.html"><p>${usuarioTres}</p></a>
                                            </div>
                                            <div class="usuario usuario-4 card-agregarusuario btn-style4">
                                                <a href="agregarusuario.html"><img src="img/usuarios/4.png" alt="usuario-4"></a>
                                                <a href="agregarusuario.html"><p>Agregar Perfil</p></a>
                                            </div>
                                        `
    } 
    else if ( cantidadUsuarios == 4 ){
        contenedorUsuarios.innerHTML = `
                                            <div class="usuario usuario-1 btn-card1-style4">
                                                <a href="portalus.html"><img src="img/usuarios/1.png" alt="usuario-1" id="usUno"></a>
                                                <a href="portalus.html"><p>${usuarioUno}</p></a>
                                            </div>
                                            <div class="usuario usuario-1 btn-style4">
                                                <a href="portalus.html"><img src="img/usuarios/2.png" alt="usuario-1" id="usDos"></a>
                                                <a href="portalus.html"><p>${usuarioDos}</p></a>
                                            </div>
                                            <div class="usuario usuario-1 btn-style4">
                                                <a href="portalus.html"><img src="img/usuarios/3.png" alt="usuario-1" id="usTres"></a>
                                                <a href="portalus.html"><p>${usuarioTres}</p></a>
                                            </div>
                                            <div class="usuario usuario-1 btn-style4">
                                                <a href="portalus.html"><img src="img/usuarios/5.png" alt="usuario-1" id="usCuatro"></a>
                                                <a href="portalus.html"><p>${usuarioCuatro}</p></a>
                                            </div>
                                        `
    } 

}





