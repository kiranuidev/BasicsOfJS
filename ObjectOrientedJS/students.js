var students =["Ravi","John","Shruthi","krishna"];
var vehicles =["Audi","BMW","BENZ","Ferari"];
Array.prototype.odd=function(){
   console.log(this);//current calling array.
    var list=[];
    for(var i=0;i<this.length;i++){
        if(i%2==1){
            list.push(this[i]);
        }
    }
    return list;
};
Array.prototype.even=function(){
   console.log(this);//current calling array.
    var list=[];
    for(var i=0;i<this.length;i++){
        if(i%2==0){
            list.push(this[i]);
        }
    }
    return list;
};
var result = students.odd();
console.log(result);
var result2= students.even();
console.log(result2);
var vehi = vehicles.odd();
console.log(vehi);  