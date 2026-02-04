Promise.prototype.PromiseAllSettled = function (promises) {
    return new Promise((resolve) => {
        if (promises.length === 0) {
            resolve(results);
            return
        }
        let results = [];
        let finishedCount = 0;
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then((value) => {
                    results[i] = {
                        status: "fulfilled",
                        value: value
                    };
                })
                .catch((error) => {
                    results[i] = {
                        status: "rejected",
                        reason: error
                    }
                })
                .finally(() => {
                    finishedCount++;
                    if (finishedCount === promises.length) {
                        resolve(results);
                    }
                })

        }
    })
}