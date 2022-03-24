function run(errorType, errorList){
 // errorType = JSON.parse(errorType);
 // errorList = JSON.parse(errorList);
  
  if(!errorList){
      throw new Error("List is empty!");
    }

  for(item in errorList){
    if(errorList[errorType] >= 1) return true;
  }
  
  return false;
}

let errorList = {
  image: 1,
  video: 0,
  audio: 0,
  contact: 0,
  locale: 0,
  media : 0,
  text: 0
}

let errorTypes = "image";

console.log(run(errorTypes, errorList));