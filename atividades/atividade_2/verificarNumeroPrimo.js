/**
 * Verifica se um numero é primo
 * @param {integer} n 
 * @returns {boolean}
 */
function verificarNumeroPrimo(n){
 
    if (n<=1) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    
    for(let i=3;i<= Math.sqrt(n);i+=2){
        if(n%i==0){
            return false;
        }
    }
       return true;
}
   
    let n = prompt("Informe um numero: ");
    
    let resultado = verificarNumeroPrimo(n);
    console.log(`O numero ${n} é primo? ${resultado}`);

 if (n<=1) return false;
 if(n==2) return true;
 if(n%2==0) return false;
 
 for(let i=3;i<= Math.sqrt(n);i+=2){
     if(n%i==0){
         return false;
     }
 }
    return true;
}

 let n = prompt("Informe um numero: ");
 
 let resultado = verificarNumeroPrimo(n);
 console.log(`O numero ${n} é primo? ${resultado}`);

