let prmario =  new Array;

let element =  new Array;

for ( let k = 0; k < 100 ; k++){
    element.push(true);
}

for (let k = 2; k <= 100; k++){
    if(element[k] == true){

        for (let p = k * k; p < 100; p += k){
            element[p] = false;
        }
    }
}

for(let k = 2; k < 100; k++){

    if(element[k]){
        prmario.push(k);
        console.log(k);
    }
}