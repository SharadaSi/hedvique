//Vytvořím 2 promenné, které reprezentují první dvě čísla z Fibonacciho posloupnosti


let n1 = 0
let n2 = 1

//Cyklus s omezeným počtem opakování začínající ve 3.cyklu

console.log(n1)
console.log(n2)

for (let i = 3; i <= 20; i++){
    let nNext = n1 + n2
    n1 = n2
    n2 = nNext

    // Vnořený cyklus s omezeným počtem opakování začínající na nultém cyklu (protože )

    for (let j = 0; j <= nNext; j++){
        console.log(nNext)
    }
}




