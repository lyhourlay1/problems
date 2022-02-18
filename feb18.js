function unguardedRooms(board){
    let row = board[0][0]
    let col = board[0][1]

    var myGrid = [...Array(row)].map(e => Array(col).fill(''));
    let walls =[]
    let guards =[]
    let i=1
    while(i<board.length){
        let x = board[i][0]
        let y = board[i][1]
        let fill = board[i][2]
        fill==='g' ? guards.push(board[i]) : walls.push(board[i])
        myGrid[x][y]= fill
        i+=1
    }
    let dirs =[[0,1],[1,0], [-1,0],[0,-1]]
    guards.forEach(g=>{
        let guardRow = g[0]
        let guardCol = g[1]
        dirs.forEach(dir=>{
            let nextRow = guardRow+dir[0]
            let nextCol = guardCol+dir[1]
            
            while(nextCol <col && nextRow<row && nextCol>=0 && nextRow>=0 && myGrid[nextRow][nextCol] !== 'w' ){
                myGrid[nextRow][nextCol] = '-'
                nextRow+=dir[0]
                nextCol+=dir[1]
            }
        })
    })
    let result =[]
    myGrid.forEach((rows,x)=>{
        rows.forEach((ele, y) =>{
            console.log(rows)
            if (ele==='') result.push([x, y])
        })
    })

    if(result.length===0){
        return true
    }else{
        result.unshift(false)
        return result
    }

}


let board = [[4,6],[0,0,'g'],[0,1,'w'],[1,1,'g'], [2,2,'w'], [2,3,'g']]
console.log(unguardedRooms(board))
