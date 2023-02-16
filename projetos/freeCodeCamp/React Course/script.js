function main(val){
    for(var i=2; i < val; i++){
      if(val % i === 0){
        return false;
      }
    }
    return true;
  }
  function sumPrimes(num) {
    var answer = 0;
    for(var i=2; i <= num; i++){
        if(main(i)){
        answer += i;
      }
    }
    return answer;
  }
  console.log(sumPrimes(1000));