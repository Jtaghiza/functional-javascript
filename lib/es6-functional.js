const map = (array, fn) => {
    let results = [];
    for(let value of array) {
        results.push(fn(value))
    }
    return results;
}

const filter = (array, fn) => {
    let results = [];
    for(const value of array) {
        (fn(value)) ? results.push(value) : undefined;
    }
    return results;
}

const concatAll = (array, fn) => {
    let results = [];
    for(const value of array) {
        results.push.apply(results, value);
    }
    return results;
}

const reduce = (array, fn, initial) => {
    let accumlator = initial;
    for(const value of array)
        accumlator = fn(accumlator, value)
    return [accumlator]
}

const arrayUtils = {
    map: map,
    filter: filter,
    concatAll: concatAll,
    reduce: reduce
}


export {arrayUtils}