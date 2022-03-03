function sortArray(arr){
    return arr.sort((a,b)=> a.localeCompare(b))
}
const arr= ['a', 'c', 'b', 'd', 'm']
console.log(sortArray(arr))