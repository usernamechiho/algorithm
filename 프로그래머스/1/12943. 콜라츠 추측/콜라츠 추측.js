function solution(n) {
    const limit = 500;
    let count = 0;
    
    // n이 1이 될 때까지
    while (n !== 1) {
        if (count > limit) return -1
        
        if (n % 2 === 0) {
            n = n / 2
            count++
        } else {
            n = n * 3 + 1
            count ++
        }
    }
    
    return count
}