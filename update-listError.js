function run(erroType, errorList){
  //errorList = JSON.parse(errorList);
  if(!errorList){
      return {
          image: 0,
          video: 0,
          audio: 0,
          contact: 0,
          locale: 0,
          media : 0
      }
  }
  
  try{
    var errorSelect = errorList[erroType];
    errorSelect++;
    errorList[erroType] = errorSelect;
    return errorList;
  }catch {
    throw new Error("A lista está vazia");
  }
}

let errorList = {
  image: 0,
  video: 0,
  audio: 0,
  contact: 0,
  locale: 0,
  media : 0
}

let errorTypeC = "contact";
console.log(run("image", errorList));
console.log(run(errorTypeC, errorList));