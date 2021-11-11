const test = require('prompt-sync')({ sigint: true });


exports.printMsg = function(_a,_c) {
  
    if (_a === undefined){
        throw new Error("Value: Undefined")   
    }else if (_c === undefined){
        throw new Error("Value: Undefined")   
    }
    test("A :")

}