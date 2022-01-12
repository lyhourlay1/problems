// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let i =1;
//     let j=0
//     let found = false;
//     while(!found){
//         if(!A.includes(i)){
//             return i
//         }
//         i++;
//     }
// }

// console.log(solution([0]))

// -- write your code in PostgreSQL 9.4
// SELECT department.dept_id, COUNT(employee.emp_id), SUM(employee.salary) from department
// INNER JOIN employee ON department.dept_id = employee.dept_id
// GROUP BY department.dept_id  
// ORDER BY department.dept_id ASC

// function solution(A, K) {
//     var n = A.length;
//     for (var i = 0; i < n ; i++) {
//         if (A[i] + 1 < A[i + 1])
//             return false;
//     }
//     if (A[0] != 1 || A[n - 1] != K)
//         return false;
//     else
//         return true;
// }
// console.log(solution([1, 1, 2, 3, 3], 3))
// console.log(solution([1, 1, 3], 2))
// console.log(solution([1, 0, 3], 2))
// console.log(solution([2, 3], 3))
// console.log(solution([0, 1, 3], 2))
// console.log(solution([1, 1, 2], 2))

// function solution(S){
//     let i =0;
//     let count =1;
//     let result=[]
//     while(i< S.length-1){
//         if(S[i] === S[i+1]){
//             count++;
//         }else{
//             result.push(S[i].repeat(count))
//             count=1;
//         }
//         if(i=== S.length-2){
//             result.push(S[i].repeat(count))
//         }
//         i++
//     }
//     return result
// }


function solution(S){
    let result =[]
    let i=1
    let word = S[0]
    while(i< S.length){
        if(S[i]===S[i-1]){
            word+= S[i]
        }
        if(i=== S.length-1 && S[i]!==S[i-1]){
            result.push(S[i])
        }
        if(S[i]!==S[i-1] || i === S.length-1){
            result.push(word)
            word = S[i]
        }
        i++
    }
    let j= 1;
    let max = result[0].length;
    while(j<result.length){
        if (max< result[j].length){
            max = result[j].length
        }
        j++
    }
    let k=0;
    let sum =0;
    while(k< result.length){
        sum+=(max - result[k].length)
        k++
    }
    return result
}
console.log(solution('abba'))
