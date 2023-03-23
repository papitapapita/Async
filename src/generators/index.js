function* gen(array){
    for(let value of array){
        yield value;
    }
}

const array = [1,2,3,4,5,6,7,8];

const response = gen(array);
console.log(response.next().value);
console.log(response.next().value);
console.log(response.next().value);
console.log(response.next().value);
console.log(response.next().value);
console.log(response.next().value);