//  Memoization utility with cache eviction strategy
Function.prototype.memorize= function (fn,limit){
    let cache={};
    let keys=[];

    return function(num) {
        if(cache[num] !== undefined){
            return cache[num];
        }
        let result=fn(num);
        cache[num]=result;
        keys.push(num);

        if(keys.length >limit){
            let oldestKey=keys.shift();
            delete cache[oldestKey];
        }
        return result;
    }
}