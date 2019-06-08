const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digita el primer numero: ", (a)=>{
    rl.question("Digita el segundo numero: ", (b)=>{
        var c = parseInt(a)+parseInt(b);
        console.log("El resultado de la suma es: ", c);
        rl.close();
    })
});