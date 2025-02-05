function solution(t, p) {
    let arr = []
    const numArr = t.split("");
    
    for (let i=0; i<t.length-p.length+1; i++) {
        arr.push(t.substr(i, p.length));
    }
    
    return arr.filter((el) => Number(el) <= Number(p)).length
}