//The initial question was a modified version of fizz buzz. The second challenge 
//was coming up with a way to test that all the conditions of this fizz buzz 
//had been reached in an instance of the game.

function fizz(arr){
    let minObj = {m3: -Infinity, m7:  -Infinity, c3:  -Infinity, c7: v}
    arr.forEach(ele=>{
        if (ele%7===7 && minObj.c7 < ele) minObj.c7 = ele
        if (ele%3===3 && minObj.c3 < ele) minObj.c3 = ele
        if (ele%7===0 && minObj.m7 < ele) minObj.m7 = ele
        if (ele%3===0 && minObj.m3 < ele) minObj.c7 = ele 
    })

}
//Generate all the lowest-valued valid integer inputs that exhaustively test all 
//combinations of 4 conditionals. Conditionals such as contains a 7, is a 
//multiple of 7, contains a 3, and is a multiple of 3.



//generate numbers that satisfy one condition but not the others
//like if it’s divisble by 3 and not divisible by 5 and not containing 5, that would be one case
//%3,%5, %3&5, contain 3,contain 5, contain 3&5, contain

//%3 || contain 3 is one conditiion     smallest number for this condition 3, 5, c3,c5
//%5 || contain 5 is another contiton
//%3 || contain 3 && %5 || contain 5    smallest number for this condition c35,%35 , c3%5, c5%3, c3 !c5, c3!%5, c5 !c3, c   2^n = 16 


// 1. contain 5 not the rest
// 2. contain 3 not the rest
// 3. divisible 5 not the rest
// 4. divisible 3 not the rest 
// 5. contain 3 and 5 not divible by 3 and 5
// 6. divisible 3 and 5, contain 3,5 (all)
// 7. contain 3 and divible 5
// 8. contian 3 and not divisible 5
// 9. contain 5 and divisible 5
// 10. contain 5 and not divisible 3 
// 11. Not contain 3 and divible 5
// 12. Not contain 3 and not divible 5
// 13. Not contain 5 and divisble 3
// 14.  

//generate numbers that would pass one condition not other condition 

var fizzBuzz = function(n) {
    let i= 1
    let result  =[]
    let word=''
    while(i<=n){
        if(i%3===0 && i%5===0){
            word='FizzBuzz'
        }else if(i%3 ===0){
            word='Fizz'
        }else if(i%5===0){
            word='Buzz'
        }else{
            word= i.toString()
        }
        result.push(word) 
        i+=1
    }
    return result
}

function generateNums(){
    let result =[]
    let obj= {}
    let i =1;
    while(i<=16){
        obj[i]= true
        i+=1
    }
    i=1
    while(result.length <16){
        if(obj['1'] && i.toString().indexOf('3') !== -1 && i.toString().indexOf('5') ===-1 && i%3!==0 && i%5!==0){
            obj['1']= false
            result.push(i)
        }
        if(obj['2'] && i.toString().indexOf('3') === -1 && i.toString().indexOf('5') !==-1 && i%3!==0 && i%5!==0){
            obj['2']= false
            result.push(i)
        }
        if(obj['3'] && i.toString().indexOf('3') === -1 && i.toString().indexOf('5') ===-1 && i%3!==0 && i%5===0){
            obj['3']= false
            result.push(i)
        }
        if(obj['4'] && i.toString().indexOf('3') === -1 && i.toString().indexOf('5') ===-1 && i%3===0 && i%5!==0){
            obj['4']= false
            result.push(i)
        }
        if(obj['5'] && i.toString().indexOf('3') !== -1 && i.toString().indexOf('5') !==-1 && i%3!==0 && i%5!==0){
            obj['5']= false
            result.push(i)
        }
        if(obj['6'] && i.toString().indexOf('3') !== -1 && i.toString().indexOf('5') ===-1 && i%3===0 && i%5!==0){
            obj['6']= false
            result.push(i)
        }
        if(obj['7'] && i.toString().indexOf('3') !== -1 && i.toString().indexOf('5') ===-1 && i%3!==0 && i%5===0){
            obj['7']= false
            result.push(i)
        }
        if(obj['8'] && i.toString().indexOf('3') === -1 && i.toString().indexOf('5') !==-1 && i%3===0 && i%5!==0){
            obj['8']= false
            result.push(i)
        }
        if(obj['9'] && i.toString().indexOf('3') === -1 && i.toString().indexOf('5') !==-1 && i%3!==0 && i%5===0){
            obj['9']= false
            result.push(i)
        }
        if(obj['10'] && i.toString().indexOf('3') === -1 && i.toString().indexOf('5') === -1 && i%3===0 && i%5===0){
            obj['10']= false
            result.push(i)
        }
        if(obj['11'] && i.toString().indexOf('3') !== -1 && i.toString().indexOf('5') !==-1 && i%3===0 && i%5!==0){
            obj['11']= false
            result.push(i)
        }
        if(obj['12'] && i.toString().indexOf('3') !== -1 && i.toString().indexOf('5') ===-1 && i%3===0 && i%5===0){
            obj['12']= false
            result.push(i)
        }
        if(obj['13'] && i.toString().indexOf('3') !== -1 && i.toString().indexOf('5') !==-1 && i%3!==0 && i%5===0){
            obj['13']= false
            result.push(i)
        }
        if(obj['14'] && i.toString().indexOf('3') === -1 && i.toString().indexOf('5') !==-1 && i%3===0 && i%5===0){
            obj['14']= false
            result.push(i)
        }
        if(obj['15'] && i.toString().indexOf('3') !== -1 && i.toString().indexOf('5') !==-1 && i%3===0 && i%5===0){
            obj['15']= false
            result.push(i)
        }
        if(obj['16'] && i.toString().indexOf('3') === -1 && i.toString().indexOf('5') ===-1 && i%3!==0 && i%5!==0){
            obj['16']= false
            result.push(i)
        }        
        i+=1
    }
    return result
    
}
console.log(generateNums())

//c3    c5      %3      %5      
//-------------------------
// T     F       F       F
// F     T       F       F
// F     F       T       F
// F     F       F       T

//T     T       F       F
//T     F       T       F
//T     F       F       T
//F     T       T       F
//F     T       F       T
//F     F       T       T

//T     T       T       F
//T     F       T       T
//T     T       F       T
//F     T       T       T
//F     F       F       F
//T     T       T       T
