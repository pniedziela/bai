

let selectrandom = (min, max, num) => {
    let randomArr = [];
    for (i=0; i<num; i++){
        randNum = Math.floor(Math.random() * (+max - +min)) + +min;
        randomArr.push(randNum)
    }
    return randomArr
}

console.log(selectrandom(5,20, 10))