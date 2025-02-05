function solution(d, budget) {
    // 정렬해서 for문 돌리면 될 것 같은데?
    const orderedArr = d.sort((a, b) => a - b)

    let money = 0;
    let arr = [];
    
    for (let i=0; i<orderedArr.length; i++) {
        if (money + orderedArr[i] > budget) break;
        
        money = money + orderedArr[i];
        arr.push(orderedArr[i]);
    }
    
    return arr.length
}