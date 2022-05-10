function showEvenOdd() {

    const userNum = parseInt(document.getElementById('input-num').value)

    const even = userNum % 2 === 0
    const odd = userNum % 2 !== 0
    const cero = userNum === 0

    if(even) {
        document.getElementById('result').innerHTML = `El numero ${userNum} es par`
    }
    if(odd) {
        document.getElementById('result').innerHTML = `El numero ${userNum} es impar`
    }
    if(cero) {
        document.getElementById('result').innerHTML = `El numero ${userNum} no es par ni impar`
    }
} 