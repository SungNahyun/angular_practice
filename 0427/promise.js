function testPromise(callback){
    return new Promise(function(resolve, reject){
        if(typeof(callback) == "function"){
            console.log("1.callback is function");
            setTimeout(
                ()=>{resolve(callback);}
                , 2000);
        }else{
            reject("2.callback is not a func");
        }
    });
}

(function runA(){
    testPromise(
        function(){
        console.log("2.callback function");}
    ).then(
        function(){
        console.log("3.callback is done");}
    ).catch(
        function(reason){
            console.error(reason);}
        );

})();