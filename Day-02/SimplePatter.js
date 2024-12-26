function printPattern(row) {
    for (let i = 1; i <= row; i++) {
        let star = "";
        for( let j = 0; j < i; j++){
            star += "*"
        }
        console.log(star)
    }
}

printPattern(5)