var threeSum = function(nums) {
    let sorted= nums.sort()
    let result = []
    
    for(let index =0; index<sorted.length; index++){
        let ele = sorted[index]
        if(index>0 && ele=== sorted[index-1]){
          
          continue;
        } 
        let left = index+1
        let right = sorted.length-1
        while(left<right){
            let sum = ele + sorted[left] + sorted[right]
            if(sum === 0){
                result.push([ele, sorted[left], sorted[right]])
                break;
            }else if(sum<0){
                left+=1
            }else{
                right-=1
            }
        }
    }
    return result
  
};
console.log(threeSum([-1,0,1,2,-1,-4]))