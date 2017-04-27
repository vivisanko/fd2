// JavaScript File
function myFunction(...args) {
    var dlin = args.length - 1;
    var func = args[dlin];
    var result = [];
    for (var i = 0; i < dlin; i++){
      result[i] = func (args[i]);
    }
    return result;
}
var myAct = myFunction('abc','def','foo','bar', function (str){
    return str.toUpperCase();
} );
console.log(myAct);


