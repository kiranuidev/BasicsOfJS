function variables(){
    console.log(x);//undefined
    console.log(y);
    var y=1000;
    var x=100;
}
variables();


function variablesOptimised(){
    var x,y;
    console.log(x);
    console.log(y);
    x=100;
    y=1000;
}
/*
 function variables(){
 var x,y;
 console.log(x);
 x=100;
 }
*/