var hr = 0
var min = 0
var sec = 0
var interval

function twodig(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    interval = setInterval(watch,0.00001)
}
function pause(){
    clearInterval(interval)
}
function stop(){
    clearInterval(interval)
    hr = 0
    min = 0
    sec = 0
    document.getElementById('watch').innerHTML= twodig(hr)+":"+twodig(min)+":"+twodig(sec)
}


function watch(){
    sec++
    if (sec==60){
        min++
        sec=0
        if (min == 60){
            hr++
            min=0
        }
    }
    document.getElementById('watch').innerHTML= twodig(hr)+":"+twodig(min)+":"+twodig(sec)
}