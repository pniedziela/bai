// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let a = (b, c, h) => {
    p = (b + c + h)/2;
    res1 = p*(p-b)*(p-c)*(p-h)
    result = Math.sqrt(res1);
    return result
}

console.log("Nasz pole wynosi: %d", a(b,c,h) );