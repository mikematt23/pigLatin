const submit = document.querySelector("button")

submit.addEventListener("click",function(){
  let word = document.querySelector("input").value.toLowerCase()
  word.toLowerCase()
  let wordArry = word.split(" ")
  let vowels = "aeiouy"
  if(wordArry.length === 1){
    if (
      word.charAt(0) === "a" ||
      word.charAt(0) === "e" ||
      word.charAt(0) === "i" ||
      word.charAt(0) === "o" ||
      word.charAt(0) === "u" 
    ) {
      document.getElementById("result").innerText = word + "yay";
    } else {
       for(let i =0; i<word.length; i++){
         if (vowels.includes(word[i]) === true) {
           let result = word.substring(i) + word.substring(i,0) + "ay";
           document.getElementById("result").innerText = result;
           break;
         } else {
           result = "invalid"
           document.getElementById("result").innerText = result;
           console.log(result)
         }
      } 
    }
  } else if(wordArry.length > 1){
    let output = [] 
    wordArry.forEach(word => {
      console.log(word)
      for(let i =0; i<word.length; i++){
        
        if (vowels.includes(word[i]) === true) {
          words = word.substring(i) + word.substring(i,0) + "ay";
          console.log(words)
          output.push(words)
          let result = output.toString()
          document.getElementById("result").innerText = result;
          break
        }
      }
    });
  }
 
  return result
})