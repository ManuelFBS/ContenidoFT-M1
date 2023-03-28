function DecimalABinario(num) {
        // Usando solo parseInt()...
        let numero = parseInt(num, 10);
        let binario = numero.toString(2);
        
        // // Usando una iteración while...
        // let binario = (num % 2).toString();

        // while (num > 1) {
        //         num = parseInt(num / 2);
        //         binario = (num % 2) + binario;
        // }

        return binario;
}

console.log(DecimalABinario(1948));