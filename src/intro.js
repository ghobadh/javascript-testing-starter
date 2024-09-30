// Lesson: Writing your first tests
export function max(a, b) {
  /*
  if (a > b) return a;
  else if (b > a) return b;
  return a;
  */
 //Refactoring to a better code
 return  (a > b ) ? a :b ;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers){
  if (numbers.length == 0 ) return NaN;
  if (numbers.length ==1) return numbers[0];
  else {
    const sum = numbers.reduce((total, counter) => total + counter )
    return sum/numbers.length
  }
}
