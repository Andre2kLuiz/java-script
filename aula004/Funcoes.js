function parimp (n){
    if(n%2 == 0){
        return 'par'      
    }else{
        return 'impar'
    }
}

let res = parimp(4)
console.log(res)

function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(3, 22))

 let v = function(x){
    return x * 2
 }

 console.log(v(8))

 // 5! = 5 x 4 x 3 x 2 x1 

 function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
 }

 console.log(fatorial(5))

 function Fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n - 1)
    }
 }

 console.log(fatorial(4))


