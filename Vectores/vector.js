//  let vect = [2,3,4,5,6,7,8,9,10,11];

//  let aux =  vect[0];

//  for(i = 0; i < vect.length ; i++ ){
//      vect[i]=vect[i+1];
//  }

//  vect[vect.length - 1] = aux;
// console.table(vect);

let vect = [2,3,4,5,6,7,8,9,10,11];

let aux =  vect[0];

for(i = 0; i > vect.length ; i-- ){
    vect[i]=vect[i-1];
}

vect[vect.length + 1] = aux;
console.table(vect);

