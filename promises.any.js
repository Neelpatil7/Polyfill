Promise.prototype.promiseAny=function(promises){
    return new Promise((resolve,reject)=>{
        let errors=[];
        let rejectedCount=0;
        if(promises.length===0){
            reject("no promises passes");
            return;
        }
        for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i])
                .then((value)=>{
                    resolve(value);
                })
            .catch((error)=>{
                errors[i]=error;
                rejectedCount++;
                if(rejectedCount===promises.length){
                    reject(errors);
                }
            })
        }
    })
}