
var longestPalindrome = function(s) {
    let max =""
    let i=0
    while(i< s.length){
        let j=i
        let word=''
        while(j< s.length){
            word+= s[j]
            console.log(word)
            console.log(isPalindrome(word))
            if(isPalindrome(word) && max.length < word.length){
                max = word
            }
            j+=1
        }
        i+=1
    }
    return max
};

function isPalindrome(word){
    if(word.length===1) return false

    return word.split('').join('')===(word.split("").reverse().join(''))
}

console.log(isPalindrome('aba'))