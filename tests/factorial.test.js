import { expect, it, test, describe} from "vitest";
import { factorial } from "../src/factorial";

describe('factorial ', () =>{
    it('should be retrun 1 for 0', () =>{
        expect(factorial(0)).toBe(1);
    })
    it('should be retrun 1 for 1', () =>{
        expect(factorial(1)).toBe(1);
    })
    it('should be retrun 2 for 2', () =>{
        expect(factorial(2)).toBe(2);
    })

    it('should be retrun 6 for 3', () =>{
        expect(factorial(3)).toBe(6);
    })
    it('should be retrun 24 for 4', () =>{
        expect(factorial(4)).toBe(24);
    })
    it('should be retrun "undefined" for -1', () =>{
        expect(factorial(-1)).toBe(undefined);
    })
})