// Sum of all numbers in an array-Arrow function

var sum =(a)=>{
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6]))