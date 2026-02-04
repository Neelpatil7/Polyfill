Promise.prototype.promiseAll=function(promises) {
    return new Promise((resolve,reject)=>{
        let results=[];
        let finishedCount=0;
        if(promises.length===0){
            resolve(results);
            return;
        }
        for (let i = 0; i < promises.length; i++) {
              Promise.resolve(promises[i])
              .then((value)=>{
                results[i]=value;
                finishedCount++;
                if(finishedCount===promises.length){
                    resolve(results);
                }
              })
              .catch((error)=>{
                reject(error);
              })
            
        }
    })
}