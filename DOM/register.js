//collect the data entered by the user.
//step1: fetch the references of all the controls.
// step2: handle the button click
// step3: on click of the button read the data of each control.

var controls ={};//this is an object which holds the reference of controls
controls.firstName = document.getElementById("txtFirstName");
controls.lastName = document.getElementById("txtLastName");
controls.email = document.getElementById("txtEmail");
controls.password= document.getElementById("txtPassword");
controls.remember= document.getElementById("chkRemember");
controls.submit = document.getElementById("btnSubmit");

controls.submit.addEventListener("click",register);


function register(){
    var user ={};
    user.FirstName = controls.firstName.value;
    user.LastName = controls.lastName.value;
    user.email=controls.email.value;
    user.password = controls.password.value;
    user.remember = controls.remember.checked;
    console.log(user);
}
function addPlaceholders(){
    controls.firstName.placeholder="Enter First Name";
    controls.lastName.placeholder="Enter Last Name";
    controls.password.placeholder="Enter Password";
    controls.email.placeholder="Enter your Email";
}


addPlaceholders();


/* restrict the user to enter numbers into first name
 step 1: capture what user enters in the text box
 step 2: identify if it is a nuber o not
step 3: if number restrict else allow.*/
controls.firstName.addEventListener("keypress",alphabetsOnly);

function alphabetsOnly(evt){
    console.log(evt);
    if((evt.charCode>=97 && evt.charCode<=122) 
       ||(evt.charCode>=65 && evt.charCode<=90) ){
        console.log("happy");
    }
    else{
        evt.preventDefault();
    }

}





























