process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    let a = Number(n[0]), b = Number(n[1]);
    
    let star = "";
    
    while (a > 0) {
        star += "*"
        a = a-1
    }
    
    for (let i=0; i<b; i++) {
        console.log(star)
    }
});