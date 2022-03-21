//Remove 3 or more consecutive characters from a 
//String. e.g.: ABCCCCBBCA -> ABBBCA -> ACA

//iterate to find the triplets
//get the index of the triplets and update the array
//using while loop to keep iterating until the there is no tripets

// function removeCon(str){
//     let arr = str.split('')
//     let repeat = true
//     while(repeat){
//         let temp = arr.join('')
//         arr =isRepeat(arr)
//         if(temp === arr.join('')){
//             repeat= false
//         } 
//     }
//     return arr.join('')
// }

// function isRepeat(arr){
//     let i =0
//     let matched =[]
//     while(i<arr.length-1){
//         while(arr[i]=== arr[i+1]){
//             matched.push(i)
//             i+=1
//         }
//         if(matched.length>=2){        
//             return arr.slice(0, matched[0]).concat(arr.slice(matched[matched.length-1]+2))
//         }else{
//             matched=[]
//         }
//         i+=1
//     }
//     return arr
// }
// let str = 'ABCCCCBBCA'

// console.log(removeCon(str))


var isValid = function(s) {
    
    //iterate through string 
    //create array =[]
    //check if  (, {, [
         //push it into the array 
    //else if ')' 
        //if the last index of the array is '('
        ///pop to remove the element of the array 
    //return array ===0 or not
    //T: O(n)
    //S: O(n)
        
    let i=0                                    //'()('
    let arr=[]  
    console.log(s.length) 
                               //arr=['(']
    while(i< s.length){ 
        console.log('arr',arr) 
        console.log('s',s)  
        console.log(i)                  
        if(s[i]==='(' || s[i]==='[' || s[i]==='{'){ 
            arr.push(s[i])
        }else if(s[i]===')'){
            if(arr[arr.length-1] === '('){          //true
                arr.pop()                           
            }else{
                return false
            }
        }else if(s[i]===']'){
            if(arr[arr.length-1]==='['){
                arr.pop()
            }else{
                return false
            }
        }else if(s[i]==='}'){
            if(arr[arr.length-1]==='{'){
                arr.pop()
            }else{
                return false
            }
        }
        i+=1
    }
    return arr.length===0.          //false 1===0
};

// console.log(isValid("()") + " --> True")
// console.log(isValid("()(") + " --> False")
console.log(isValid("()[]{}") + " --> True")
// console.log(isValid("]") + " --> False")
// console.log(isValid("(") + " --> False")
// console.log(isValid("([])") + " --> True")
// console.log(isValid("([)") + " --> False")