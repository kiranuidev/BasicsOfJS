function bookTicket(source,destination){
    
    //return "ticket booked";
    //return ["Hey how are you.Have a safe journey",source,destination];
    //return true;
    return function(mode){
        console.log("From: "+source);
        console.log("To: "+destination);
        console.log("Mode: "+mode);
    }
}

var result1 = bookTicket("hyd","vij");
var result2= bookTicket("hyd","Newyork");
var result3= bookTicket("Chennai","Andaman");
result1("Train");
result2("Flight");
result3("Cruise");
//result();
