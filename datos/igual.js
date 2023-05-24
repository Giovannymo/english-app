
let lista=[...dic[1]]

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(lista);
console.log(lista)

var m=0;
var b2=document.getElementById("b2")
var a1=document.getElementById("a1")
var k=document.getElementById("k")
var a2=document.getElementById("a2")
var audio=document.getElementById("audio")

let p=dic[1].indexOf(lista[m].trim())

k.src=dic[3][p]
audio.src="audio/pronunciation_en_"+dic[1][p].trim()+".mp3"
a1.innerHTML=dic[1][p].trim()

b2.addEventListener("click",d1)
function d1(){
    m++;
    if(m===(dic[1].length)){
        m=0
    }
    var p=dic[1].indexOf(lista[m].trim())
    k.src=dic[3][p]
    b2.innerHTML=m;
    a1.innerHTML=dic[1][p].trim()
    a2.innerHTML="_______"
    myString=dic[1][p].trim()
    if (myString.includes(" ")) {
        myString = myString.replace(/ /g, "_");
    }
    audio.src="audio/pronunciation_en_"+dic[1][p].trim()+".mp3"
}
function reproducirAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}
function esp(){
    x=a1.innerHTML
    s1=dic[1].indexOf(lista[parseInt(b2.innerHTML)].trim())
    if(x===dic[1][s1].trim()){
        a1.innerHTML=dic[2][s1].trim()
    }else{
        a1.innerHTML=dic[1][s1].trim()
    }   
}
a2.addEventListener("click",f)
function f(){
    x=a2.innerHTML
    s2=dic[1].indexOf(lista[parseInt(b2.innerHTML)].trim())
    if(x==="_______"){
        a2.innerHTML=dic[4][s2]
    }else{
        a2.innerHTML="_______"
    }   
}
/* b1.addEventListener("click",d2)
function d2(){
    m--;
    if(m===(f3.length)){
        m=0
    }
    k.src=f3[m]
    b2.innerHTML=m;
    console.log(m)
    a1.innerHTML=f1[parseInt(b2.innerHTML)]
    a2.innerHTML="_______"
    audio.src="audio/pronunciation_en_"+f1[parseInt(b2.innerHTML)]+".mp3"
} */

/* b3.addEventListener("click",d3)
function d3(){
    m++;
    if(m===(f3.length)){
        m=0
    }
    k.src=f3[m]
    b2.innerHTML=m;
    console.log(m)
    a1.innerHTML=f1[parseInt(b2.innerHTML)]
    a2.innerHTML="_______"
    audio.src="audio/pronunciation_en_"+f1[parseInt(b2.innerHTML)]+".mp3"
} */

