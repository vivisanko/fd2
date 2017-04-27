// JavaScript File
function isPalin(str) {
    var str1 = str.split(" ").join("");
    str1 = str1.toUpperCase();
   var palin = true;
   var dlin = str1.length;
   for (var i = 0; i < dlin / 2; i++){
       if (str1[i] !== str1[dlin - 1 - i]){
          palin = false;
           break;
       }
   }
   return palin;
}

var str = prompt("Введите строку");
while ( str.length < 2) {
 str = prompt("Введите строку, в которой будет больше одного символа");
}
var yourPalin = isPalin(str);
if (yourPalin) {
    alert(str + " - палиндром!");
} else {
    alert(str + " -  не палиндром!");
}