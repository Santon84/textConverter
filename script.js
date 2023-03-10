const textToUpperCase = () => {
    clearAll();
       
    text.value = text.value.toUpperCase()
    
}

const textToLowerCase = () => {
    clearAll();
    
    text.value = text.value.toLowerCase() 
}

const capitalizeFirstLetter = (string) => {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

const textCapitalizeAll = () => {
    clearAll();
    inputText = text.value.toLowerCase();
    console.log(inputText.split(/(?:,|- )+/));
    inputText = inputText.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
    text.value = inputText;
}

const removeSpaces = () => {
    clearAll();
    let outputText = '';
    // for (let i=0; i<inputText.length; i++) {
    inputText = text.value; 
    // }
    outputText = inputText.replace(/\s+/g, ' ')
    .trim()
    .replaceAll(' .', '.')
    .replaceAll(' ,', ',')
    .replaceAll(' ;', ';')
    .replaceAll(' :', ':')
    .replaceAll(' !', '!')
    .replaceAll(' ?', '?')
    .replaceAll('( ', '(')
    .replaceAll(' )', ')')
    

    charsDisplay.innerHTML = `Cимволов: ${outputText.length}`;
    text.value = outputText;
}


const removeAllSpaces = () => {
    clearAll();
    let outputText = '';
    // for (let i=0; i<inputText.length; i++) {
    inputText = text.value; 
    // }
    outputText = inputText.replace(/\s+/g, '')
    .trim();
    
    charsDisplay.innerHTML = `Cимволов: ${outputText.length}`;
    text.value = outputText;
}

const CapitalizeSentence = () => {
    clearAll();
    inputText = text.value.toLowerCase();
    //console.log(inputText.split(/(?:,|- )+/));
    inputText = inputText.split('. ').map(word => capitalizeFirstLetter(word)).join('. ');
    text.value = inputText;
}

const markCyrillic = () => {
    inputText = text.value;
    let outText = '';
    const symbols = 'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя';

    for (let i=0; i<inputText.length; i++) {

        if (~symbols.indexOf(inputText[i])) {

            
            outText += '<mark>'+inputText[i]+'</mark>'
        }
        else {
            outText += inputText[i];
        }
    }
    outerText.innerHTML = outText;
}
const markLatin = () => {
    inputText = text.value;
    let outText = '';
    const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i=0; i<inputText.length; i++) {

        if (~symbols.indexOf(inputText[i])) {

            
            outText += '<mark>'+inputText[i]+'</mark>'
        }
        else {
            outText += inputText[i];
        }
    }
    outerText.innerHTML = outText;
}

const clearAll = () => {
    outerText.innerHTML = '';
    inputText = '';
}


let defaulText = '';
let inputText = '';
const charsDisplay = document.querySelector('.char-count');
const text = document.getElementById('inputText');
const button = document.getElementById('mybtn');
const outerText = document.querySelector('.result-text>code');

text.addEventListener('input', (e) => {
    
    inputText = e.target.value;
    charsDisplay.innerHTML = `Cимволов: ${inputText.length}`;
})

