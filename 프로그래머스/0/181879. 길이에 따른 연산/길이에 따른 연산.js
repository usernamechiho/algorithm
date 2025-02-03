function solution(arr) {
    if (arr.length >= 11) {
        return arr.reduce((acc, cur) => acc + cur, 0);
    } else {
        return arr.reduce((acc, cur) => acc * cur, 1);
    }
}