function Person(){
    var PAN;//private property.
    this.FirstName="";//public property;
    this.LastName="";//public property
    this.fullName=function(){
        
    };
}


var user = new Person();
user.FirstName="kiran";


var user2 = new Person();
user2.FirstName="Ravi";

Person.prototype.gender="male"
//user2.gender="f";
console.log(user);
console.log(user2.gender);





















