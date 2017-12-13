// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function problem10(){

    var a = 0;

    function isPrime(n){
        var i = 2;
        var b = true;
        while(i<=Math.sqrt(n) && b){
            b = n%i===0?false:true;
            i++;
        }
        return n<2?false:b;
    }

    for(i=0;i<2000000;i++){
        if(isPrime(i)){
            a+=i;
        }
    }
    return a;

}