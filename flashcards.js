const questions = document.querySelector('.question');
const answers = document.querySelector('.answer');
const btnCreate = document.querySelector('.create');
const btnFinish = document.querySelector('.finish');
const flashcardFront = document.querySelector('.flashcard-front');
const flashcardBack = document.querySelector('.flashcard-back');
const frontText = document.querySelector('.front-text');
const backText = document.querySelector('.back-text');
const btnNew = document.querySelector('.new');

btnNew.classList.add('hidden');

function createObject(){
    return {
        question: questions.value,
        answer: answers.value
    }
}

let arr = []

btnCreate.addEventListener('click', function(){
 arr.push(createObject())
 questions.value = '';
 answers.value = '';
})

let randomIndex = Math.trunc(Math.random() * arr.length)

let usedIndexes = [];

btnFinish.addEventListener('click', function(){
     btnNew.classList.remove('hidden')
     questions.classList.add('hidden')
     answers.classList.add('hidden')
     btnCreate.classList.add('hidden')
     btnFinish.classList.add('hidden')
    frontText.textContent= arr[randomIndex].question;
    backText.textContent = arr[randomIndex].answer;
    usedIndexes.push(randomIndex);
   
})

btnNew.addEventListener('click', function(){



    randomIndex = Math.trunc(Math.random() * arr.length)
    for(let i = 0; i < usedIndexes.length; i++){
     if(usedIndexes[i] === randomIndex){
        randomIndex = Math.trunc(Math.random() * arr.length)
     }
}

frontText.textContent= arr[randomIndex].question;
    backText.textContent = arr[randomIndex].answer;
    usedIndexes.push(randomIndex);
})


document.querySelector('.home').addEventListener('click', function(){
    window.location.href = "index.html";
});