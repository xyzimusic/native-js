import {multiply, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(()=>{
   a = 1;
   b = 2;
   c = 3;
})

test('sum should be correct', () => {
    //data
    // const a = 1;
    // const b = 2;
    // const c = 3;

    //action
    const result1 = sum(a, b)
    const result2 = sum(a, c)

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(4);
})


test('sum should be multiply', () => {
    //data
    // const a = 1;
    // const b = 2;
    // const c = 3;

    //action
    const result1 = multiply(a, b)
    const result2 = multiply(a, c)

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(3);
})

test('splitting into words should be correct', () => {
    //data
    const sent1 = 'hello my friend'
    const sent2 = 'JS - the best  programming language.'

    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)
    console.log(result2)

    //expect result

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')
    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')

})