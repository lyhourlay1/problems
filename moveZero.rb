def move_zeroes(nums)
    i =0
    removed= []
    len= nums.length
    while i< len
        if nums[i]==0
            nums.push(0)
            removed.push(i)
        end
        i+=1
    end
    count =0
    removed.each do |index|
        nums.slice!(index+count)
        count-=1
    end
    return nums
    
end

p move_zeroes([0,1,0,3,12])
