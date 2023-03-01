function inverteCaracteres(string) {
    var invertida = '';
    for (let i = string.length-1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}

console.log(inverteCaracteres('letra'));
