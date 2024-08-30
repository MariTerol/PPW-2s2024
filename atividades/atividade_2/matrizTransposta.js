function transporMatriz(A) {
    
    let matrizTransposta = [];

    for (let i = 0; i < A[0].length; i++) {
        matrizTransposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            matrizTransposta[i][j] = A[j][i];
        }
    }

    console.log("Matriz Original:");
    for (let i = 0; i < A.length; i++) {
        console.log(A[i]);
    }

    console.log("Matriz Transposta:");
    for (let i = 0; i < matrizTransposta.length; i++) {
        console.log(matrizTransposta[i]);
    }
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);

