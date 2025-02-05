function solution(s) {
    const arr = s.toLowerCase().split(" ")
    
    const toJadenCase = arr.map((el, i) => {
        let string = "";
        
        for (let i=0; i<el.length; i++) {
            if (i === 0 && isNaN(el[i])) {
                string += el[i].toUpperCase()
            } else {
                string += el[i].toLowerCase()
            }
        }
        
        return string
    })
    
    return toJadenCase.join(" ")
}