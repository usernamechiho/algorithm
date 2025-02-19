function solution(arr) {
    let 짝수 = 0;
    let 홀수 = 0;
    
    for (let n of arr) {
        if (n % 2 === 0) {
            짝수 += 1
        } else {
            홀수 += 1
        }
    }
    
    return [짝수, 홀수]
}