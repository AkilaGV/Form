var amazon=new Promise(
    function (resolve,reject)
{
    var delivered=True
    if(delivered==true){
       resolve("Delivered")
    }
    else{
        reject("Failed")
    }
}
amazon.then(function(dalta){
    console.log("Successful register")
}.catch(function(){
    console.log("fgjsk")
})))