var longestCommonPrefix = function(strs) {

    let splitter = '&'+strs[0]
    strs ='&'+strs.join("&")
    let i=1
    let splitLen = strs.length 
    while((strs.split(splitter.slice(0,i))).length === splitLen){
        console.log(strs)
        i+=1
    }
    return splitter.slice(1,i+2)
};