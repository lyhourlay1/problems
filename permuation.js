//create permute method
    //check if arr.length ==0
    //if so push m into result
    //else iterate though the arr to get all next possible index
        //then reassing curr with arr
        //then remove it based of the index
        // recursive call till it hits arr.length===0 base case

    // return result
const permutator = (input)=>{
    let result=[]
    const permute = (arr, m=[])=>{
        if(arr.length===0){
            result.push(m)
        }else{
            let i=0
            while(i< arr.length){
                let curr = arr.slice()
                let next = curr.splice(i,1)
                permute(curr, m.concat(next))
                i+=1
            }

        }
    }
    permute(input)
    return result
}

// console.log(permutator(['c','a','t','d']))


//recursive call till num-1 ===0 
//if 0, then return [[]]
//iteate thorugh arr
//iterate thorugh subArr
//push ele.concat sub

function allPairs(arr, num){
    let result=[]
    if(num===0){
        return [[]]
    }
    let subArr = allPairs(arr, num-1)
    arr.forEach(ele=>{
        subArr.forEach(sub=>{
            result.push(ele.concat(sub))
        })
    })
    return result
}
console.log(allPairs(['c','a','t'], 3));