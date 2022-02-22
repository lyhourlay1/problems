function sortArray(arr){
    return arr.sort((a,b)=> a.localeCompare(b))
}
const arr= ['cat', 'dog', 'elephant', 'bee', 'ant']
console.log(sortArray(arr))