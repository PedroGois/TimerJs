var hr = 0
var min = 0
var sec = 0
var speed = 1
var interval
var buttons = document.querySelector('.botoes')
var watch = document.getElementById('watch')
var body = document.querySelector("body")
var marioimg = document.querySelector(".marioimg")

function changeStyle(value){
    if (value == 'running'){
        body.style.background="black"
        body.style.color="aqua"
        watch.style.color="aqua"
        marioimg.style.display="inline"
        
        
    }else if(value=='pause'){
        body.style.background="red"
        body.style.color="white"
        watch.style.color="white"
        marioimg.style.display="none"
        
    }else{
        body.style.background="aqua"
        body.style.color="black"
        watch.style.color="black"
        marioimg.style.display="none"        
    }
}

function twodig(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watchcontrol()
    interval = setInterval(watchcontrol,1000/speed)
    buttons.innerHTML="<button class='pause-btn' onclick='pause()'>Pausar</button> <button class='stop-btn'  onclick='stop()'>Parar</button>"
    changeStyle('running')
}
function pause(){
    clearInterval(interval)
    buttons.innerHTML="<button class='start-btn' onclick='start()'>Retomar</button> <button class='stop-btn'  onclick='stop()'>Parar</button>"
    changeStyle('pause')
}
function stop(){
    clearInterval(interval)
    hr = 0
    min = 0
    sec = 0
    watch.innerHTML= twodig(hr)+":"+twodig(min)+":"+twodig(sec)
    buttons.innerHTML="<button class='start-btn' onclick='start()'>Iniciar</button>"
    changeStyle(false)
}


function watchcontrol(){
    sec++
    if (sec==60){
        min++
        sec=0
        if (min == 60){
            hr++
            min=0
        }
    }
    watch.innerHTML= twodig(hr)+":"+twodig(min)+":"+twodig(sec)
}

/* Alterando velocidade */

function changeSpeed(){
    stop()
    var select=document.getElementById("speed")
    speed = parseInt(select.options[select.selectedIndex].value)
    clearInterval(interval)
    console.log(select.selectedIndex)
}