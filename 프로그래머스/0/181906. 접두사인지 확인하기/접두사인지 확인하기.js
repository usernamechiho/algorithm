function solution(string, prefix) {
    if (prefix.length > string.length) return 0
    
    const substring = (string.substring(0, prefix.length));
    
    return substring === prefix ? 1 : 0
}