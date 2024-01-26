//console.log ("link avvenuto");

var sceltaUtente;
var buttonTag;
var selezioneFoglia;
var selezioneForbice;
var selezioneSasso;
var responso;
var punteggioUtente;
var punteggioDellaCpu;
var puntiAttualiCpu = 0;
var puntiAttualiUtente = 0;


sceltaUtente=document.getElementById("scelta");
buttonTag=document.getElementById("inizia");
selezioneFoglia=document.querySelector("#you li");
selezioneForbice=document.querySelector("#you li:nth-child(2)");
selezioneSasso=document.querySelector("#you li:last-child");
responso=document.getElementById("risultato");
punteggioUtente=document.getElementById("punteggioYou");
punteggioDellaCpu=document.getElementById("punteggioCpu");


buttonTag.addEventListener("click", gestoreInizioPartita);

function gestoreInizioPartita(){
    //console.log ("click avvenuto");
    sceltaUtente.style.display="block";
document.getElementById("you").style.backgroundImage = "";
}



//SELEZIONE FOGLIA lato utente

    selezioneFoglia.addEventListener("click",sceltaFoglia);

    function sceltaFoglia(){
    
    //console.log (selezioneFoglia);

    document.getElementById("you").style.backgroundImage="url(./immagini/foglia.png)";

    sceltaUtente.style.display="none";

//risposta CPU

    var divSceltaCpu;
    divSceltaCpu=document.querySelector("#cpu div");

    var mossaCpu;
    mossaCpu=Math.floor(Math.random()*3);
   // console.log(mossaCpu);

    //ATTRIBUZIONE VALORI SASSO-FOGLIA-FORBICE DELLA CPU

// Sasso=0;
// Foglia=2;
// Forbice=1;

    if(mossaCpu==0) {
        document.getElementById("cpu").style.backgroundImage="url(./immagini/sasso.png)";
        responso.innerHTML="<span>" + "YOU WIN" + "</span>";
        document.querySelector("#risultato span").style.color="#1d6600";
        responso.style.display="block";
        var puntiAttualiUtente;
        puntiAttualiUtente=punteggioUtente.innerHTML;
        punteggioUtente.innerHTML=Number(puntiAttualiUtente ) + 1;
        
    }
    
    else if(mossaCpu==1){
        document.getElementById("cpu").style.backgroundImage="url(./immagini/forbice.png)";
        responso.innerHTML="<span>" + "YOU LOSE" + "</span>";
        document.querySelector("#risultato span").style.color="#e22d00";
        responso.style.display="block";
        puntiAttualiCpu=punteggioCpu.innerHTML;
        punteggioDellaCpu.innerHTML=Number(puntiAttualiCpu ) + 1;}
    
    else if(mossaCpu==2){
        document.getElementById("cpu").style.backgroundImage="url(./immagini/foglia.png)";
        responso.innerHTML="<span>" + "DRAW" + "</span>";
        document.querySelector("#risultato span").style.color="#ceb900";
        responso.style.display="block";}

}

//SELEZIONE FORBICE lato utente

    selezioneForbice.addEventListener("click",sceltaForbice);

    function sceltaForbice(){
        
    //console.log (selezioneForbice);


    document.getElementById("you").style.backgroundImage="url(./immagini/forbice.png)";

    sceltaUtente.style.display="none";

//risposta CPU

    var divSceltaCpu;
    divSceltaCpu=document.querySelector("#cpu div");

    var mossaCpu;
    mossaCpu=Math.floor(Math.random()*3);

    console.log(mossaCpu);

 //ATTRIBUZIONE VALORI SASSO-FOGLIA-FORBICE DELLA CPU

// Sasso=0;
// Foglia=2;
// Forbice=1;

    if(mossaCpu==0) {
        document.getElementById("cpu").style.backgroundImage="url(./immagini/sasso.png)";
        responso.innerHTML="<span>" + "YOU LOSE" + "</span>";
        document.querySelector("#risultato span").style.color="#e22d00";
        responso.style.display="block";
        puntiAttualiCpu=punteggioCpu.innerHTML;
        punteggioDellaCpu.innerHTML=Number(puntiAttualiCpu ) + 1;}
    
    else if(mossaCpu==1){
        document.getElementById("cpu").style.backgroundImage="url(./immagini/forbice.png)";
        responso.innerHTML="<span>" + "DRAW" + "</span>";
        document.querySelector("#risultato span").style.color="#ceb900";
        responso.style.display="block";}
    
    else if(mossaCpu==2){
        document.getElementById("cpu").style.backgroundImage="url(./immagini/foglia.png)";
        responso.innerHTML="<span>" + "YOU WIN" + "</span>";
        document.querySelector("#risultato span").style.color="#1d6600";
        responso.style.display="block";
        puntiAttualiUtente=punteggioUtente.innerHTML;
        punteggioUtente.innerHTML=Number(puntiAttualiUtente ) + 1;}
}

//SELEZIONE SASSO lato utente

    selezioneSasso.addEventListener("click",sceltaSasso);

    function sceltaSasso(){
    
    //console.log (selezioneSasso);

    document.getElementById("you").style.backgroundImage="url(./immagini/sasso.png)";

    sceltaUtente.style.display="none";

//risposta cpu

    var divSceltaCpu;
    divSceltaCpu=document.querySelector("#cpu div");

    var mossaCpu;
    mossaCpu=Math.floor(Math.random()*3);

    console.log(mossaCpu);

//ATTRIBUZIONE VALORI SASSO-FOGLIA-FORBICE DELLA CPU

// Sasso=0;
// Foglia=2;
// Forbice=1;

    if(mossaCpu==0) {
    document.getElementById("cpu").style.backgroundImage="url(./immagini/sasso.png)";
    responso.innerHTML="<span>" + "DRAW" + "</span>";
    document.querySelector("#risultato span").style.color="#ceb900";
    responso.style.display="block";}

    else if(mossaCpu==1){
    document.getElementById("cpu").style.backgroundImage="url(./immagini/forbice.png)";
    responso.innerHTML="<span>" + "YOU WIN" + "</span>";
    document.querySelector("#risultato span").style.color="#1d6600";
    responso.style.display="block";
    puntiAttualiUtente=punteggioUtente.innerHTML;
    punteggioUtente.innerHTML=Number(puntiAttualiUtente ) + 1;}

    else if(mossaCpu==2){
    document.getElementById("cpu").style.backgroundImage="url(./immagini/foglia.png)";
    responso.innerHTML="<span>" + "YOU LOSE" + "</span>";
    document.querySelector("#risultato span").style.color="#e22d00";
    responso.style.display="block";
    puntiAttualiCpu=punteggioCpu.innerHTML;
    punteggioDellaCpu.innerHTML=Number(puntiAttualiCpu ) + 1;

}

}










