// variable neccessaire
// la liste de quesiot
var qList = [];
// position de la question actuell
var qNbr = 0;

// definition d'une question
function question (nb,t)  {
    this.nbr = nb;
    this.time = t;
}

// definition des questions
function start(val){
    
    for(var i=1; i < 10; i++){
        var q = new question();
        q.nbr = (i+1);
        q.time =val;
        qList[i-1] = q;
    }
    shuffle();
    displayQ();
}

function displayQ(){
    console.log("display=" + qList.length);
    
    var ul = document.getElementById("qList");
    ul.innerHTML = "";
    for (var i=0; i < qList.length; i++){
        ul.innerHTML += "<li>" + qList[i].time + " x " 
        + qList[i].nbr + " = "
        + "<span class='true'" + ">" 
        + (qList[i].nbr * qList[i].time)  + "</span>"
        + "</li>";
    }
}

// melange les questions
function shuffle(){
    console.log("avant shuffle " + qList.length);
    for (var i=0; i < 100; i++){
        var index = Math.floor(Math.random()*9);
        var lastOne = qList[qList.length-1];
        var theOne = qList[index];
        
        qList[index] = lastOne;
        qList[qList.length-1] = theOne;
    }
    console.log("après shuffle " + qList.length);
}

window.onload = function(){

    document.getElementById("btnTwo").onclick = function(){
        start(document.getElementById("btnTwo").value);
    }
    
    document.getElementById("btnThree").onclick = function(){
        start(document.getElementById("btnThree").value);
    }
    
    document.getElementById("btnFor").onclick = function(){
        start(document.getElementById("btnFor").value);
    }
    
    document.getElementById("btnFive").onclick = function(){
        start(document.getElementById("btnFive").value);
    }
    
    document.getElementById("btnSix").onclick = function(){
        start(document.getElementById("btnSix").value);
    }
    
    document.getElementById("btnSeven").onclick = function(){
        start(document.getElementById("btnSeven").value);
    }
    
    document.getElementById("btnEight").onclick = function(){
        start(document.getElementById("btnEight").value);
    }
    
    document.getElementById("btnNine").onclick = function(){
        start(document.getElementById("btnNine").value);
    }

    document.getElementById("answer").onKeypress = console.log("onkeydown")
       // processKeyEvent(document.getElementById("answer").event);
    
    processKeyEvent = function(event)
    {
        console.log("Chier");
        // MSIE hack
        if (window.event)
        {
            event = window.event;
        }
        console.log(event.keyCode);
    }; 

}