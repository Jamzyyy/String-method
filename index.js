let girl = "girls boys";
let length = girl.length;
console.log(length);

let indexOf = girl.indexOf("r");
console.log(indexOf);

let lastindexof = girl.lastIndexOf("s")
console.log(lastindexof)
 
let charAt = girl.charAt(0)
console.log(charAt)

let value = " girl "
let trim = value.trim()
console.log("before trim",value.length)
console.log("after trim",trim.length)

let charcode = girl.charCodeAt(3)
console.log(charcode)

let newValue = "Good Girl"
let slice = newValue.slice(0,5)
console.log(slice)
  
let newName = "jamal"
let toUpperCase = newName.toUpperCase().charAt(0)
console.log(toUpperCase);

let word = "good"
let word2 = "bad"
let concat =word.concat(" ", word2," ", "wicked")
console.log(concat);

let newWord = "He is running"
let replaceword = newWord.replace("running","walking")
console.log(replaceword);

let startWord = "Egghead"
let startsWith = startWord.startsWith("E",4)
console.log(startsWith);