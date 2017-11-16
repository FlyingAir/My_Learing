function isPrime(value) {
  if(!isPrime.answers) isPrime.answers = {};
  if(isPrime.answers[value]!=null){
      return isPrime.answers[value]
  }
  var prime = value != 1;//1 不是素数
  for(var i = 2;i<value;i++){
      if(value%2===0){
          prime = false;
          break;
      }
  }
  return isPrime.answers[value] = prime
}
console.log(isPrime(5));
console.log(isPrime.answers[5]);