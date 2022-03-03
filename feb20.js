// //OOP

// class Node{
//     constructor(element){
//         this.element = element
//         this.next= null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size= 0
//     }
// }

// LinkedList.prototype.add= function(ele){
//     let node = new Node(ele)
//     let curr 
//     if(this.head === null){
//         this.head = node
//     }else{
//         curr= this.head
//         while(curr.next){
//             curr = curr.next
//         }
//         curr.next = node
//     }
//     this.size+=1
// }

// LinkedList.prototype.remove= function(){
//     let prev,curr
//     if(this.head === null){
//         return 
//     }else{
//         curr= this.head
//         prev= curr
//         while(curr.next){
//             prev= curr
//             curr = curr.next
//         }
//         prev.next = curr.next

//     }
//     this.size-=1
//     return curr.element
// }

// const node = new Node('a')
// const list = new LinkedList()
// list.add(node)
// list.add(node)
// list.add(node)
// list.remove()
// console.log(list)

// class ArrayList{
//     constructor(){
//         this.array = []
//     }
// }
// ArrayList.prototype.get= function(index){
//     return this.array[index]
// }

// ArrayList.prototype.push = function(ele){
//     this.array.push(ele)
// }

// let array = new ArrayList()
// array.push('a')
// console.log(array.push(0))

//Find the most frequent elements in the array (expected in O(N), not even O(2N))
// function findMost(arr){
//     let result =[]
//     let max = 0
//     let i=0
//     let obj={}
//     while(i<arr.length){
//         if(obj[arr[i]]===undefined){
//             obj[arr[i]]=1
//         }else{
//             obj[arr[i]]+=1
//         }
//         if(obj[arr[i]]===max){
//             result.push(arr[i])
//         }else if(obj[arr[i]]> max){
//             result=[arr[i]]
//             max= obj[arr[i]]
//         }
//         i+=1
//     }
//     return result
// }

// let arr =[1,4,2,3,4,2,3,2,3]
// console.log(findMost(arr))

