var video  = document.getElementById("PlayCustomizado");

////    PLAY E PAUSE

function playpause(){

    if(video.paused == true){
        video.play();
        video.width = 700
    }
    else{
    video.pause();
    }
}

////    TELA CHEIA

function telacheia(){
    video.requestFullscreen();
}

////    AMPLIAR TELA

function ampliar(){
    video.width = 1000;
}

////    REDUZIR TELA

function reduzir(){
    video.width = 400;
}

////    TAMANHO NORMAL

function Tamanhonormal(){
    video.width = 400;
}

////    VOLUME MAIS

function volumemais(){
    video.volume = video.volume + 0.9;
}

////    VOLUME MENOS

function volumemenos(){
    video.volume = video.volume - 0.1;
}

////    MUDO

function mute(){
    if(video.muted){
        video.muted = false;
    }
    else{
        video.muted = true;
    }
}

