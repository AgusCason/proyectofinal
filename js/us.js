const usuario = document.querySelector('.nav-usuario') ;


window.onload = leerUsuario();

function leerUsuario(){
    let us = localStorage.getItem("us") ;
    let nus = us ;

    if ( nus == 10){
        usuario.innerHTML = `<a href="usuarios.html"><img src="img/icons/1.png" alt="usuario"></a>`
    }else if( nus == 20){
        usuario.innerHTML = `<a href="usuarios.html"><img src="img/icons/2.png" alt="usuario"></a>`
    }else if( nus == 30){
        usuario.innerHTML = `<a href="usuarios.html"><img src="img/icons/3.png" alt="usuario"></a>`        
    }else if( nus == 40){
        usuario.innerHTML = `<a href="usuarios.html"><img src="img/icons/4.png" alt="usuario"></a>`        
    }
}