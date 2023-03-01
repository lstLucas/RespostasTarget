function calculaFibonacci(num) {
    var sequenciaFibonacci = [0,1]
    var atual = sequenciaFibonacci[1];
    var lastIndex = 1;
    while(atual <= num){
        if(atual == num || num == 0){
            console.log(`O número ${num} pertence à sequência de Fibonacci`);
            return;
        }
        lastIndex = sequenciaFibonacci.length;

        sequenciaFibonacci[lastIndex] = sequenciaFibonacci[lastIndex-1] + 
            sequenciaFibonacci[lastIndex-2];

        atual = sequenciaFibonacci[lastIndex];
    }
    console.log(`O número ${num} não pertence à sequência de Fibonacci`);
}

calculaFibonacci(4181);
calculaFibonacci(-10);