function whatTypeAm<T>(parameter: T) {
 
    return parameter;
}

let stringType = whatTypeAm('Hello');
let numberType = whatTypeAm(123);
let arrayType = whatTypeAm([1, 2, 3]);