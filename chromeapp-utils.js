
function getValue (k) {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(k, res => {
            if (res) {
                resolve(res[k])
            } else {
                reject(Error(`Empty result for ${k}`))
            }
        })
    })
}

export class Storage {
    async get (key) {
        try {
            var result = await getValue(key)
            return result
        } catch (e) {
            throw e
        }
    }
    set (key, value) {
        try {
            let obj = {}
            obj[key] = value
            chrome.storage.sync.set(obj)
        } catch (err) {
            throw new Error('Problem on set key/value at ChromeApp Storage')
        }
    }
}
