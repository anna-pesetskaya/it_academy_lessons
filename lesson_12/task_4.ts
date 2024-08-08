// 4. Обеспечьте правильную типизацию для указанных функций.

// /**
//  * 2 arguments passed: returns a new array
//  * which is a result of input being mapped using
//  * the specified mapper.
//  *
//  * 1 argument passed: returns a function which accepts
//  * an input and returns a new array which is a result
//  * of input being mapped using original mapper.
//  *
//  * 0 arguments passed: returns itself.
//  *
//  * @param {Function} mapper
//  * @param {Array} input
//  * @return {Array | Function}
//  */
// export function map(mapper, input) {
//     if (arguments.length === 0) {
//         return map;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subInput) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return subInput.map(mapper);
//         };
//     }
//     return input.map(mapper);
// }

interface SubFunction<I, O> {
    (): SubFunction<I, O>;
    (input: I[]): O[];
}

export function map<I, O>(): typeof map;
export function map<I, O>(mapper: (i: I) => O): SubFunction<I, O>;
export function map<I, O>(mapper: (i: I) => O, input: I[]): O[];

export function map<I, O>(mapper?: (i: I) => O, input?: I[]) {
    if (mapper && input) {
        return input.map(mapper);
    }
    if (mapper) {
        const subFunction = (input?: I[]) => input ? input.map(mapper) : subFunction;
        return subFunction;
    }
    return map;
}
const mapResult1 = map()(String)()([1, 2, 3]);
console.log(mapResult1)

// /**
//  * 2 arguments passed: returns a new array
//  * which is a result of input being filtered using
//  * the specified filter function.
//  *
//  * 1 argument passed: returns a function which accepts
//  * an input and returns a new array which is a result
//  * of input being filtered using original filter
//  * function.
//  *
//  * 0 arguments passed: returns itself.
//  *
//  * @param {Function} filterer
//  * @param {Array} input
//  * @return {Array | Function}
//  */
// export function filter(filterer, input) {
//     if (arguments.length === 0) {
//         return filter;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subInput) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return subInput.filter(filterer);
//         };
//     }
//     return input.filter(filterer);
// }
interface FiltererFunc<I> {
    (): FiltererFunc<I>;
    (input: I[]): I[];
}

export function filter<I, O>(): typeof filter;
export function filter<I, O>(filterer: (i: I) => O): FiltererFunc<I>;
export function filter<I, O>(filterer: (i: I) => O, input: I[]): O[];

export function filter<I, O>(filterer?: (i: I) => O, input?: I[]) {
    if (filterer && input) {
        return input.filter(filterer);
    }
    if (filterer) {
        const subFunction = (input?: I[]) => input ? input.filter(filterer) : subFunction;
        return subFunction;
    }
    return filter;
}

const filterResult1 = filter()(String)()([1, 2, 3]);
console.log(filterResult1)

// /**
//  * 2 arguments passed: returns sum of a and b.
//  *
//  * 1 argument passed: returns a function which expects
//  * b and returns sum of a and b.
//  *
//  * 0 arguments passed: returns itself.
//  *
//  * @param {Number} a
//  * @param {Number} b
//  * @return {Number | Function}
//  */
// export function add(a, b) {
//     if (arguments.length === 0) {
//         return add;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subB) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return a + subB;
//         };
//     }
//     return a + b;
// }
export function add<a,b>(a: number): (b: number) => number;
export function add<a,b>(a: number, b: number): number;

export function add(a: number, b?: number): number | Function {
    if (b === undefined) {
       return function(b: number) {
           return a + b;
       }
    } else {
       return a + b;
    } 
}

console.log(add(3, 2));