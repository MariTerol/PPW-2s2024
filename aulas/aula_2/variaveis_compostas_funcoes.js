// Declarar um array

const notas = [9,8.5,7,"10", false];

notas[4]=true;

/**
 * comentario de bloco
 */
console.log(notas);

// Verificar a quantidade de elementos dentro do array
console.log(notas.length);

// Laço de repetiçao para percorrer o array
for(let i=0;i<notas.length;i++){

    // Estrutura de controle - condição
    if(typeof notas[i] == 'number'){
        if (notas[i]>=7) {
            console.log("Aprovado!");
        } else {
            console.log("Reprovado!");
        }
    }
    else{
        console.log("Nota invalida!");
    }
}

/* Declaraçao de matriz 3x3
    2 1 0
    0 1 0
    1 2 1
*/
let A=[
[2,1,0],
[0,1,0],
[1,2,1]
];
console.log(A[1][2]);    // resultado: 0

let capitais = {
    DF: 'Brasilia',
    DF_DDD: 61,
    BA: 'Salvador',
    BA_DDD: 71,
    RJ: 'Rio de Janeiro',
    RJ_DDD: 21
};

console.log(capitais.DF);

// Percorre o objeto
for (const key in capitais) {
    const valor = capitais[key];
    console.log(key+' - '+valor);
}

/**
 * Verifica se um numero é par
 * @param {integer} n 
 * @returns {boolean}
 */
function verificarNumeroPar(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

console.log(verificarNumeroPar(2));
console.log(verificarNumeroPar(3));