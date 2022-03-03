#O(n^2)
def max_sub_array(nums)
    i=0
    subArr = []
    while i < nums.length
        j=i
        sum = 0
        while j< nums.length
            sum+= nums[j]
            subArr.push(sum)
            j+=1
        end
        i+=1
    end
    return subArr.max()
end

#O(N)
def max_sub_array2(nums)
    currSubArr = nums[0]
    maxSubArr = nums[0]
    
    i=1
    while i< nums.length
        num= nums[i]
        currSubArr = [num, currSubArr + num].max()
        maxSubArr = [maxSubArr, currSubArr].max()
        p currSubArr 
        p maxSubArr
        p i
        i+=1
    end
    return maxSubArr
end

p max_sub_array2([-2,10,5,-11, 6, 7])
