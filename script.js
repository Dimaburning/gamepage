let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (isNaN(minValue)){
    minValue = 0;
    
}

if (isNaN(maxValue)){
    maxValue = 100;
    
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = true;
    if(gameRun){
         minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
         maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        const answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText=  `Вы загадали число ${answerNumber }?`;
        orderNumber = 1;
        orderNumberField.innerText = orderNumber;


    }
    
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `Я не угадал :(` :
                (phraseRandom === 2) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    
    
    if (gameRun){
        
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            const answerPhrase = (phraseRandom === 1) ?
                `Я не угадал(` :
                (phraseRandom === 2) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = minValue + Math.floor((answerNumber - minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;

            
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){const phraseRandom = Math.round( Math.random()*2);
        const answerPhrase = (phraseRandom === 1) ?
            `Угадал)` :
            (phraseRandom === 2) ?
            `eazy breezy\n\u{1F60E}` :
            `Я всегда угадываю!`;

        answerField.innerText = answerPhrase;
        
        gameRun = false;
    }
})

