const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent);
const phrases = ["frontend developer...","human being...","quick learner..."];
let phrasei=0;
let i = 0;
const typingSpeed=150;
const erasingSpeed=75;
function printLetters(phrase) {
    if(i===phrase.length){
        //clear letters which have been typed
        clearLetters();
    }
    else if(i < phrase.length) {
        dynamicContent.textContent += phrase.charAt(i);
        i += 1;
        setTimeout(function () {
            printLetters(phrase);
        }, typingSpeed);
    }
}
function clearLetters(){
      if(i===-1){
        phrasei=(phrasei+1)%phrases.length;
        i=0;
        printLetters(phrases[phrasei]);
      }
      else if(i>-1){
        let updatedphrase=" ";
        for(let idx=0;idx<i;idx++){
            updatedphrase+=phrases[phrasei].charAt(idx);
        }
        console.log(updatedphrase);
        dynamicContent.textContent=updatedphrase;
        i-=1;
        setTimeout(clearLetters,erasingSpeed)
      }
}
printLetters(phrases[phrasei]);