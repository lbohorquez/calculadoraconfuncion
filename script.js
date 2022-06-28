//seleccionar un elemento
//document.querySelector('.display').innerText=''
function agregarNumeroSiete()
{ 
    document.querySelector('.display').innerText += '7'
}
function agregarNumeroOcho()
{
    document.querySelector('.display').innerText +='8'
}
function agregarNumeroNueve()
{
    document.querySelector('.display').innerText +='9'
}
function agregarNumeroCuatro()
{
    document.querySelector('.display').innerText +='4'
}
function agregarNumeroCinco()
{
    document.querySelector('.display').innerText +='5'
}
function agregarNumeroSeis()
{
    document.querySelector('.display').innerText +='6'
}
function agregarNumeroTres()
{
    document.querySelector('.display').innerText +='3'
}
function agregarNumeroCuatro()
{
    document.querySelector('.display').innerText +='4'
}
function agregarNumeroCinco()
{
    document.querySelector('.display').innerText +='5'
}
function agregarNumeroUno()
{
    document.querySelector('.display').innerText +='1'
}
function agregarNumeroDos()
{
    document.querySelector('.display').innerText +='2'
}
function agregarNumeroCero()
{
    document.querySelector('.display').innerText +='0'
}
function agregarNumeroDobleCero()
{
    document.querySelector('.display').innerText +='00'
}
function limpiar()
{
    document.querySelector('.display').innerText=''
}

 function limpiarCE()
 {
    document.querySelector('.display').innerText=''
 }
 function agregarPorcentaje()
 {
    document.querySelector('.display').innerText+='%'
 }
 function dividir()
 {
    document.querySelector('.display').innerText+='/'
 }
 function multiplicar()
 {
    document.querySelector('.display').innerText+='*'
 }
 function sumar()
 {
    document.querySelector('.display').innerText+='+'
 }
 function restar()
 {
    document.querySelector('.display').innerText+='-'
 }
 function agregarPunto()
 {
    document.querySelector('.display').innerText+='.'
 }
 function resultado()
 {
    let valor = document.querySelector('.display').innerText
    //console.log(valor)
    let resultado = eval(valor)
    console.log(resultado)
    document.querySelector('.display').innerText = resultado
    

    //variable
    // let valor = document.querySelector('.display').innerText
    // console.log(valor)
    // let miNumero = 3  Se le puede asignar otro valor sin problemas.
    // console.log("Mi numero:"+3)
    //constante
    // const PI=3.14
    // console.log(PI)
    // PI=75   No se puede asignar otro valor. Da ERROR.
    // console.log(PI)
 }

