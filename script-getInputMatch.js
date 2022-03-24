function run(inputContent, sheetOptions){
  return getMatch(inputContent, sheetOptions);
}

function getMatch(inputContent, sheetOptions){
  //sheetOptions = JSON.parse(sheetOptions);
  var inputClean = replaceSpecialLetters(inputContent);
  let arrayResult = [];
  let menuOptions = [];
  
  for (i = 0; i < sheetOptions.length; i++){
    var keyword = replaceSpecialLetters(sheetOptions[i])
    if(inputContent.toLowerCase().includes(keyword.toLowerCase())){
      arrayResult.push(keyword);
      menuOptions.push(sheetOptions[i]);
    }
  }
  
  return {
    inputMatchsCount : arrayResult.length,
    inputClean: inputClean,
    matchsFound : arrayResult,
    optionsMenu : menuOptions
  }
}


function replaceSpecialLetters(input) {
    const specialCharToCommonChar = {
        á: 'a',
        à: 'a',
        â: 'a',
        ä: 'a',
        ã: 'a',
        é: 'e',
        è: 'e',
        ê: 'e',
        ë: 'e',
        í: 'i',
        ì: 'i',
        î: 'i',
        ï: 'i',
        ó: 'o',
        ò: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        ñ: 'n',
        ç: 'c'
    };
  
    for (const key in specialCharToCommonChar) {
        let keyRegex = new RegExp(`${key}`, 'gi');
        input = input.replace(keyRegex, specialCharToCommonChar[key]);
    }
    return input;
}




let keyWords = [
    "Problemas com Conta",
    "Problemas Técnicos",
    "Empréstimos",
    "Cartão",
    "Kit QR",
    "Taxa",
    "Teclado da Point não funciona",
    "Point não lê cartões"
]; 
console.log(run("Estou tendo problemas tecnicos e problemas com conta", keyWords));