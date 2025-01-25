let drawnNumbersList = [];
let limitNumber = 10;

function initialMessage(){
    showingContentOnScreen('h1', 'Adivinhe o número secreto');
    showingContentOnScreen('p', `Escolha um número entre 1 e ${limitNumber}: `);
}
initialMessage();

function randomNumber(){
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let numberOfElementsInList = drawnNumbersList.length;

    if (numberOfElementsInList == limitNumber){
        drawnNumbersList = [];
    }

    if (drawnNumbersList.includes(chosenNumber)){
        return randomNumber();
    } else {
        drawnNumbersList.push(chosenNumber);
        console.log(drawnNumbersList);
        return chosenNumber;
    }
}
let secretNumber = randomNumber();
let attempts = 1;


// let title = document.querySelector('h1');
// title.innerHTML = 'Adivinhe o número secreto';

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Escolha um número entre 1 e 10';

function showingContentOnScreen(tag, texto){
    let field = document.querySelector(tag);;
    field.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
showingContentOnScreen('h1', 'Adivinhe o número secreto');
showingContentOnScreen('p', 'Escolha um número entre 1 e 10: ');

function kickCheck() {
    let kick = document.querySelector('input').value;

    if (kick == secretNumber){
        showingContentOnScreen('h1', 'Acertou!');
        let attemptWord = attempts > 1 ? 'tentativas' : 'tentativa';
        let attemptsMenssage = `Parabéns! Você descobriu o número secreto com ${attempts} ${attemptWord}!`;
        showingContentOnScreen('p', attemptsMenssage);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (kick > secretNumber){
            showingContentOnScreen('h1', 'Tente mais uma vez.');
            showingContentOnScreen('p', `O número secreto é menor que ${kick}`);
        } else {
            showingContentOnScreen('h1', 'Tente mais uma vez.');
            showingContentOnScreen('p', `O número secreto é maior que ${kick}`);
        }
        attempts++
        cleanField();
    }
    // console.log(kick == secretNumber);
}

function cleanField(){
    kick = document.querySelector('input');
    kick.value = '';
}

function restartGame(){
    secretNumber = randomNumber();
    cleanField();
    attempts = 1;
    initialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

