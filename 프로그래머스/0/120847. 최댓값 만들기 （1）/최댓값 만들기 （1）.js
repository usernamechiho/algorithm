function solution(numbers) {
    const sortedArr = numbers.sort((a, b) => a - b)
    const length = sortedArr.length
    
    return sortedArr[length-1] * sortedArr[length-2]
}