const promise = (value) => {
    return new Promise((resolve, reject) => {
        if(value){
            resolve('Heyy!!');
        }else{
            reject('Nou');
        }
    })
}

promise(true)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(() => console.log('Done!'));

const cows = 10;

const countCows = new Promise((resolve, reject) => {
    if(cows > 14){
        resolve('Enough');
    }else{
        reject('Not enough');
    }
})

countCows
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
    .finally(() => console.log('Day completed'));
