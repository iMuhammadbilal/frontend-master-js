

function show () {
    if(1){

        var functionScoped = "functionScoped";
        let blockScoped = "blockScoped";
    }
    console.log(functionScoped);
}
show();



// console.log(localVar); // This would cause an error: localVar is not defined  