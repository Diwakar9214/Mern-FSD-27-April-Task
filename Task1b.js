// Convert all the strings to title caps in a string array
//  Anonymous function &IIFE
var str=function (string) {
  var sent = string.toLowerCase().split(" ");
  for(var i = 0; i< sent.length; i++){
     sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
  }
sent.join(" ");
var res="";
for(let i=0;i<sent.length-1;i++)
{
   res+=sent[i]+" "
}
res+=sent[sent.length-1]
return res;
}
console.log(str("welcome to chennai guvi"));
//  IIFE

(function (string) {
  var sent = string.toLowerCase().split(" ");
  for(var i = 0; i< sent.length; i++){
     sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
  }
sent.join(" ");
var res="";
for(let i=0;i<sent.length-1;i++)
{
   res+=sent[i]+" "
}
res+=sent[sent.length-1]
console.log(res);
}) ("welcome to chennai guvi");