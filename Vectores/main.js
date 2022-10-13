let primos = new Array;

let elementos = new Array;

for (let i = 0 ; i < 1000; i++) {
    elementos.push(true);
}
for (let i = 2; i <= 1000; i++) {
    
    if (elementos[i] == true) {
        
        for (let x = i * i; x < 1000; x += i) {
            elementos[x] = false;
        }
    }
}

for (let i = 2; i < 1000; i++) {
    
    if (elementos[i]) {
        primos.push(i);
        console.log(i);
    }
}