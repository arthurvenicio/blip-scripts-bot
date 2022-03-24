function run(json){
  //json = JSON.parse(json);
  let { relatedsAnswers } = json;

  let result = sliceArray(relatedsAnswers);
  return result; 
}

function sliceArray(questions){

  if(questions.length >= 5) {
    let result = [];
    let x = 0, y = 5, z = 0;

    for(var i = 0; i <= questions.length; i++){
     for(var i = 0; i <= y; i++){
       
       if(i == y){
         let r = questions.slice(x,y);
         z += r.length;
         if(z == r.length){
          r.push("Ver mais")
         }

         result.push(r);
         
       }
       
     }
     
     x = y;
     y += 5;
   }

     return result;
  }

  return questions;
}

let array = {
    keyWord: "Problemas Técnicos",
    answerKeyWord: "Me parece que você identificou algum problema técnico? 🤔\nPara tentarmos solucionar o seu problema técnico, digite o número de uma das opções disponíveis abaixo.",
    relatedsAnswers: [
        "Minha Point não liga ou a bateria não carrega, o que eu faço?",
        "Minha maquininha não reconhece o chip de dados",
        "O teclado da minha Point não funciona",
        "Minha Point tem erro \"Ped tampered\". O que eu faço?",
        "Minha Point está com um erro na tela. O que eu faço?",
        "Minha Point não está lendo cartões, o que eu faço?",
        "Nenhuma das opções acima"
    ]
}


console.log(run(array))
