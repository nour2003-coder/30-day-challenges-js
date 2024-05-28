var createCounter=function(n){
    return function(){
        return(n++);

    }
}
const c=createCounter(10);
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());