const inputField = document.querySelector('.input');
const audio = document.querySelector('.audio-reader');
const flashCards = document.querySelector('.flash-cards');

function createTask(text) 
{
    var h = document.createElement("H2");
    var t = document.createTextNode(text); 
    h.appendChild(t); 
    document.body.appendChild(h);
    h.style.fontFamily = 'sans-serif';
    h.style.color = 'white';
    h.style.textAlign = 'center';
    
    h.addEventListener('mouseover',function(){
            h.style.textDecoration = 'line-through'
    })

    h.addEventListener('mouseleave', function(){
            h.style.textDecoration = 'none';
    })

    h.addEventListener('click', function(){
            h.style.display = 'none';
    })
}

audio.addEventListener('click', function(){
        window.location.href = "audio.html";
})

flashCards.addEventListener('click', function(){
        window.location.href = "flashcards.html";
})

let array = [];
inputField.addEventListener('keydown',function(){
    
        if (event.keyCode === 13) {
          

       

           createTask(inputField.value);
           array.push(inputField.value)
           inputField.value = '';

        }
        
  
})

document.querySelector('.nav').classList.add('hidden');

setTimeout(function(){
        document.querySelector('.nav').classList.remove('hidden');
        document.querySelector('.nav').classList.add('addAnimation');
},1000)