function solution(hp) {
    const 장군 = 5;
    const 병정 = 3;
    const 일 = 1;

    let count = 0;
    
    while (hp > 0) {
        if (hp >= 5) {
            hp -= 5;
            count += 1;
        } else if (hp >= 3) {
            hp -= 3;
            count += 1;
        } else {
        hp -= 1;
        count += 1
        }
    }
    
    return count
}