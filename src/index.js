const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let dot = "10";
    let dash = "11";
    let space = "**********";
    let nothing = "00";
    let symbolLength = 10;

    let morse = "";
    let numOfSymbols = expr.length / 10;
    let arr = Array.from(expr);
    let arrOfSymbolsEnc = [];
    let symbol = [];
    let decoded = "";
    let pair = [];
    
    // for (j = 0; j < numOfSymbols; j++) {
    //     for (i = 0; i < symbolLength; i++) {
    //         symbol += arr[i + j * 10];
    //     }
    //     arrOfSymbolsEnc.push(symbol);
    //     symbol = [];
    // }
    
    for (j = 0; j < numOfSymbols; j++) {
        for (i = 0; i < symbolLength; i++) {
            if (i % 2 === 0) {
                pair += arr[i + j * 10] + arr[i + j * 10 + 1];
                
            } else {continue;}
            if (pair === "**") {
                symbol = [space]; 
                pair = []; 
                continue;
            } else {
                symbol.push(pair);}
            pair = [];
        }
        arrOfSymbolsEnc.push(symbol);
        symbol = [];
    }
    // console.log(arrOfSymbolsEnc);

    for (i = 0; i < numOfSymbols; i++) {
        for (j = 0; j < arrOfSymbolsEnc[i].length; j++) {
            switch (arrOfSymbolsEnc[i][j]) {
                case nothing: 
                    break;
                case dot: 
                    morse += ".";
                    break;
                case dash:
                    morse += "-";
                case space:
                    morse += " ";
                default:
                    break;
            }
        }
        if (morse === " ") {decoded += " ";}
        else {decoded += MORSE_TABLE[morse.replace(/\s/g,'')];} 
        morse = "";
    }
    return decoded;
}

module.exports = {
    decode
}