const util = {
    baseUrl:'http://192.168.1.9:8080',
    get:function(url,successCallback,failCallback){
        fetch(url,{
            headers:{
                "Token":window.token
            }
        })
            .then(res => res.json())
            .then((data)=>successCallback(data))
            .catch(e => failCallback(e))
    },
    post:function(url,param,successCallback,failCallback){
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
                "Token":window.token
            },
            body:JSON.stringify(param)
        })
            .then(res => res.json())
            .then((data)=>successCallback(data))
            .catch(e => failCallback(e))
    }
}

export default util;