const storage = {
    timeout:100000,
    set:function(key,value){
        let options = {
            value:value,
            time:new Date().getTime()
        }
          localStorage.setItem(key,JSON.stringify(options));
    },
    get:function(key){
        let options = JSON.parse(localStorage.getItem(key));
        if(!options){
            return null;
        }else if(new Date().getTime()-options.time>this.timeout){
            localStorage.removeItem(key);
            return null;
        }else{
            return JSON.parse(localStorage.getItem(key));
        }
    },
    delete:function(key){
        if(key){
            localStorage.removeItem(key);
        }else{
            localStorage.clear();
        }
        
    },
}
export default storage;