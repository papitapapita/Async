const asyncFn = (value) => {
    return new Promise((resolve, reject) => {
        (value)
            ? resolve('Resolved')
            : reject(new Error('Rejected'));
    });
};

const foo = async () => {
    const response = await asyncFn(true);
    console.log(response);
    console.log('Ola');
}

console.log('Before');
foo();
console.log('After');