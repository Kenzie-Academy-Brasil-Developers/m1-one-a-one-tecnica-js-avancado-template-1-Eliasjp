function encontrarValor (num, num1){
    for (i = 0; i < num.length; i++){
        if (num[i] == num1){
            return `Valor Encontrado!`
        }else if (num[i] != num1 && i == num.length - 1){
            return `Valor não encontrado!`
        }
    }
    return
}

console.log(encontrarValor([3,4,5,6], 7))
console.log(encontrarValor([3,4,5,6], 5))