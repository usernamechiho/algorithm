function solution(s) {
    const arr = s.split(" ")
    
    const format = arr.map((el) => {
        let string = ""
        
        for (let i=0; i<el.length; i++){
            if (i % 2 === 0) {
                string += el[i].toUpperCase()
            } else {
                string += el[i].toLowerCase()
            }
        }
        return string
    })
    
    return format.join(" ")
}