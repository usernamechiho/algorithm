function solution(arr) {
    let answer = -1;
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
           return answer = i
        }
    }
    
    return answer
}