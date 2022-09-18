const imgUsUno = document.getElementById('usUno') ;
const imgUsDos = document.getElementById('usDos') ;
const imgUsTres = document.getElementById('usTres') ;
const imgUsCuatro = document.getElementById('usCuatro') ;
let us = 0 ;

imgUsUno.addEventListener('click', () => {
    let us = 10 ;
    localStorage.setItem("us", us) ;
})
imgUsDos.addEventListener('click', () => {
    let us = 20 ;
    localStorage.setItem("us", us) ;
})
imgUsTres.addEventListener('click', () => {
    let us = 30 ;
    localStorage.setItem("us", us) ;
})
imgUsCuatro.addEventListener('click', () => {
    let us = 40 ;
    localStorage.setItem("us", us) ;
})