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

class ArrayList{
    constructor(){
        this.array = []
    }
}
ArrayList.prototype.get= function(index){
    return this.array[index]
}

ArrayList.prototype.push = function(ele){
    this.array.push(ele)
}

let array = new ArrayList()
array.push('a')
console.log(array.push(0))

