function testPromise(callback){
    return new Promise(
        (resolve, reject)=>{
            if(typeof callback === "function"){
                console.log("1.callback is function");
                setTimeout(
                    ()=>{
                        resolve(callback);
                    },2000);

            }else if(typeof callback === "number"){
                console.log("1.callback number is"+callback);
                setTimeout(
                    ()=>{resolve(callback);},
                2000);
            }else{
                reject("1. callback is not a function");
            }
        }
    );
}

async function testAsync(x){
    var a = testPromise(20)
    var b = testPromise(30)

    return x + await a + await b
}

testAsync(50).then(result=>console.log(result))


//1.callback number is 20 
//1.callback number is 30 
//2초뒤
///100