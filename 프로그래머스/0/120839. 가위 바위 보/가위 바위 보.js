function solution(rsp) {
    let answer = "";
    
    const obj = {
        "2": "0",
        "0": "5",
        "5": "2",
    }
    
    for (let i=0; i<rsp.length; i++) {
        answer += obj[rsp[i]]
    }
    
    return answer
}