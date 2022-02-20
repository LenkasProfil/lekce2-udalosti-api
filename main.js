// tady je místo pro náš program

// console.log('test');

let nadpis = document.querySelector('h1');
let odstavec = document.querySelector('p');
let audioFile = document.getElementById('zvukovaStopa')

nadpis.classList.add('zluty');
nadpis.classList.remove('zluty')

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek')

let pocitadlo = 0
function priNajetiNaCtverec() {
    console.log('test'+ pocitadlo)
    //pocitadlo = pocitadlo + 1;  
    pocitadlo++  
}

function zmenStyl(){
    nadpis.classList.toggle('zeleny')
}

function stiskKlavesy(udalost) {
    console.log(udalost.key);
}


function startAudio() {

    console.log('Zapínám píseň')
    audioFile.play();
}

function pause() {
    console.log('Pauzni')
    audioFile.pause();
}

function load() {
    console.log('Reset')
    audioFile.load();
}

function Zvuk0 () {
    console.log('Zvuk0')
    audioFile.volume = 0.0;
}

function Zvuk05 () {
    console.log('Zvuk0,5')
    audioFile.volume = 0.5;
}

function Zvuk1 () {
    console.log('Zvuk1,0')
    audioFile.volume = 1.0;
}

function priKliknuti() {
    let nadpis = document.querySelector('p');
    nadpis.style.color = 'red';
}

let zaklad = 16 
function vetsiPriKliknuti() {
    zaklad++;
    odstavec.style.fontSize = zaklad + 'px'
}