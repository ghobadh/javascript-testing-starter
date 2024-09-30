import { describe, test, it, expect } from "vitest";
import { max , fizzBuzz, calculateAverage} from "../src/intro" 


//For descript we call 2 functions , the frist one what we expect using 'it' and the second one we use 'expect'
describe('max', () => {
    it('should return the first argument if it is greater ', () => {
        /*
        //it is called triple A (AAA) - Arrange / Act / Assert
        //Arrange
        const a = 2;
        const b = 1;

        //Act
        const result = max(a,b);
        
        //Assert
        expect(result).toBe(2);
        */

        //shorter version
        expect(max(2,1)).toBe(2)

    })

    it('should return the first argument if it is equal ', () => {
        expect(max(2,2)).toBe(2)
    })

    it('should return the first argument if it is smaller ', () => {
        expect(max(2,5)).toBe(5)

    })
});

describe('fizzBuzz' , () =>{
    it('should return FizzBuss', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })
    it('should return Fizz', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })
    it('should return Buss', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })
    it('should return 11', () => {
        expect(fizzBuzz(11)).toBe("11")
    });

});

describe('calculateAverage', () => {
    it('shoult return Nan , when the argument is not a number', () =>{
        expect(calculateAverage([])).toBe(NaN);
    })
    it('should be the average of an array with single element as itself', () =>{
        expect(calculateAverage([10])).toBe(10);
    })
    it('should be the average of an array with two or more elements', () =>{
        expect(calculateAverage([10,20])).toBe(15);
    })
})

