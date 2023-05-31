const hasMoreVowels = word => {
    const vowels = [`a`,`e`,`i`,'o','u']
    let vowelCount = 0
    word = word.toLowerCase()

    for (let i = 0; i < word.length;i++){ 
    if(vowels.includes(word[i])){
          vowelCount++
     }
    }
    

    // if (word.length / 2 < vowelCount){
    //     return true
    // } else {
    //     return false
    // }

    return word.length / 2 < vowelCount
}

console.log(hasMoreVowels(`Aal`))
console.log(hasMoreVowels(`mice`))
console.log(hasMoreVowels(`car`))