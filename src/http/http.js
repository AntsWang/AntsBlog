
const util = {
    baseUrl: process.env.NODE_ENV == 'production' ? 'http://139.155.5.93:8080' : 'http://localhost:8080',
    get: function (url, successCallback, failCallback) {
        fetch(url, {
            headers: {
                "token": window.token
            }
        })
            .then(res => res.json())
            .then((data) => {
                successCallback(data)
            })
            .catch(e => failCallback(e))
    },
    post: function (url, param, successCallback, failCallback) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                "token": window.token
            },
            body: JSON.stringify(param)
        })
            .then(res => res.json())
            .then((data) => successCallback(data))
            .catch(e => failCallback(e))
    }
}

export default util;