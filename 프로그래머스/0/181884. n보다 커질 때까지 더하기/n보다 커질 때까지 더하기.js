function solution(numbers, n) {
    let targetIndex = 0;
    let answer = 0;
    
    numbers.reduce((acc, cur, i) => {
        if (acc + cur > n) {
            targetIndex += i+1
            return;
        }
        return acc + cur
    }, 0)
    
    for (let i=0; i<targetIndex; i++) {
        answer += numbers[i]
    }
    
    return answer
}