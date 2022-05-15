const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const text = document.querySelector('#text');

alert(`hello`)
btnPlay.addEventListener('click', function(){

    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume();
    }
let utter = new SpeechSynthesisUtterance();


utter.lang = 'en-US';

utter.text = text.value;

utter.volume = 0.5;

// event after text has been spoken


// speak
window.speechSynthesis.speak(utter);
})

btnPause.addEventListener('click', function(){
    if(speechSynthesis.speaking) speechSynthesis.pause();
   
})

// document.querySelector('.home').addEventListener('click', function(){
//     window.location.href = "index.html";
// });

