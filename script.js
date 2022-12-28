const textToUpperCase = () => {
    defaulText = inputText;
    text.value = inputText.toUpperCase()
    
}

const textToLowerCase = () => {
    defaulText = inputText;
    text.value = inputText.toLowerCase() 
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

const textCapitalizeAll = () => {
    defaulText = inputText;
    console.log(inputText.split(/(?:,|- )+/));
    inputText = inputText.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
    text.value = inputText;
}

const removeSpaces = () => {
    let outputText = '';
    // for (let i=0; i<inputText.length; i++) {
        
    // }
    inputText = inputText.replace(/\s+/g, ' ')
    .trim()
    .replaceAll(' .', '.')
    .replaceAll(' ,', ',')
    .replaceAll(' ;', ';')
    .replaceAll(' :', ':')
    .replaceAll(' !', '!')
    .replaceAll(' ?', '?')
    .replaceAll('( ', '(')
    .replaceAll(' )', ')')
    

    charsDisplay.innerHTML = `Всего символов: ${inputText.length}`;
    text.value = inputText;
}

let defaulText = '';
let inputText = '';
const charsDisplay = document.querySelector('.char-count');
const text = document.getElementById('inputText');
const button = document.getElementById('mybtn');


text.addEventListener('input', (e) => {
    
    inputText = e.target.value;
    charsDisplay.innerHTML = inputText.length;
})
