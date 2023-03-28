function BinarioADecimal(num) {
        // Usando solo parseInt()...
        let numero = parseInt(num, 2);
        let decimal = parseInt(numero, 10);
        
        // // Usando una iteración...
        // let binario = num.toString().split('');
        // let binRev = binario.reverse();
        // let decimal = 0;

        // for (let i = 0; i < binRev.length; i++) {
        //         decimal += parseInt(binRev[i], 10) * Math.pow(2, i);
        // }

        return decimal;
}

console.log(BinarioADecimal(11110011100));