function solution(arr) {
    let answer = [];
    
    // 5개의 그룹씩 묶어야함으로, i+=5로 순회한다.
    for (let i = 0; i < arr.length; i+=5) {
        answer.push(arr[i]);
    }
    
    return answer;
}