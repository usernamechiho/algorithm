function solution(left, right) {
    let index = 0;
    let numArr = [];
    let 약수 = [];
    
    for (let i=left; i<=right; i++) {
        numArr.push(i)
        약수.push(0);
        
        for (let k=1; k<=i; k++) {
            if (i % k === 0) {
                약수[index] += 1
            }
        }
        index += 1
    }
    
    let answer = 0;
    
    for (let i=0; i<numArr.length; i++) {
        if(약수[i] % 2 === 0) {
            answer += numArr[i]
        } else {
            answer -= numArr[i]
        }
    }
    
    return answer
}