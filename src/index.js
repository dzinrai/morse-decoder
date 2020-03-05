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
  let arr = [];
  for(let i = 0; i<expr.length / 10; i++){
    const dec_symb = expr.slice(i*10,i*10+10);  // slicing string by 10 elements and then proceed with it
    if(/[*]{10}/.test(dec_symb)){ 
        // *********** count as whitespace
      arr.push(" ");
    }else{
      const array_of_doubles = []; //  [ "00", "00", "10", "11", "10" ]
      arr.push("");
      for(let k = 0; k<dec_symb.length/2; k++){
        array_of_doubles.push(dec_symb.slice(k*2,k*2+2));
      }
      for(let j of array_of_doubles){
        //  in array [ "00", "00", "10", "11", "10" ]
        //  10 = '.' and 11 = '-'
        if( /^10$/.test(j) ){
          arr[i]+='.';
        }else if(/^11$/.test(j)){
          arr[i]+='-';
        }
      }
    }
    // after convert sliced string of 10 elements '0000111010'=>'-..'
    // take letter or number from <MORSE_TABLE> (keys === exact morse code) except spaces
    arr[i] = /\s/.test(arr[i]) ? " " : MORSE_TABLE[arr[i]]; 
  }
  return arr.join('');
}

module.exports = {
    decode
}