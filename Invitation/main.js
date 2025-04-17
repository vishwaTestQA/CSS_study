function typeLetters(){
   const sentence = "We cordially invite you to attend"
   const sentence2 = "ENGAGEMENT CEREMONY OF"
   const ele = document.querySelector('welcome-text');
   const arr = sentence.split('')
   let i = 0;
   while(i < arr.length){
    waitForMs(3)
    ele.append(arr[i])
   }  
}

function waitForMs(){
  return new Promise((resolve) => setTimeout(resolve, ms))
}