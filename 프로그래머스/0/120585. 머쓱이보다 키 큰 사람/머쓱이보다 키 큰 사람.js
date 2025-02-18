function solution(array, height) {
    return array.filter((el) => {
        return el > height
    }).length
}