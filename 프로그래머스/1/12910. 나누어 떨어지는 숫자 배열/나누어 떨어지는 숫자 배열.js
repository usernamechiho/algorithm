function solution(arr, divisor) {
    const filteredArr = arr.filter((number) => {
        return number % divisor === 0
    })
    
    return filteredArr.length ? filteredArr.sort((a, b) => a - b) : [-1]
}