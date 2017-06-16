//Global
var x=100;
function checkGlobal(){
    x++;
    console.log(x);//101.
}

function checkLocal(){
    var x=200;
    console.log(x)//200
    console.log(window.x);
    if(true){
        let x=20;
        console.log(x);
    }
}


checkGlobal();
checkLocal();