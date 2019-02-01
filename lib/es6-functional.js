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

const curry = (fn) => {
    if (typeof fn !== 'function') {
        throw Error('No function provided');
    }
    return function curriedFn(...args) {
        if (args.length < fn.length) {
            return function () {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            };
        }
        return fn.apply(null, args);
    };
};

const partial = function (fn,...partialArgs){
    let args = partialArgs;
    return function(...fullArguments) {
        let arg = 0;
        for (let i = 0; i < args.length && arg < fullArguments.length; i++) {
            if (args[i] === undefined) {
                args[i] = fullArguments[arg++];
            }
        }
        return fn.apply(null, args);
    };
};

const arrayUtils = {
    map: map,
    filter: filter,
    concatAll: concatAll,
    reduce: reduce,
    curry: curry,
    partial: partial
}


export {arrayUtils}