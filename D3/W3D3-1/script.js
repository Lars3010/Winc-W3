const som = (...arguments) => {
    return arguments.reduce((previous, current) => {
        return previous + current;
    })
}

console.log("Som: ",som(1,2,3,4,5,6,7,8,9,10));

const nummerArray = [1,2,3,4];

const somArray = (a,b,c,d) => {
    return a + b + c + d;
}

console.log("SomArray: ",somArray(...nummerArray));