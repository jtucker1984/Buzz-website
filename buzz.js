let nextBtn = document.getElementById("nextBtn");
console.log(nextBtn);

function CustOrVenPg(){
    document.getElementById("SignUp-Section").style.display="block";
    document.getElementById("Welcome-Section").style.display="none";
    document.getElementById("CustomerSignUp").style.display="none";
}
function CustSignPg(){
    document.getElementById("SignUp-Section").style.display="none";
    document.getElementById("Welcome-Section").style.display="none";
    document.getElementById("CustomerSignUp").style.display="block";

}
function oldEnough(){
    let exp = document.getElementById("dob");
    console.log(exp.value);
    let today = new Date();
    let birthdate = new Date(exp.value);
    let ageInMilliseconds = today - birthdate;
    let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (ageInYears <= 21 ){
        alert("Sorry you must be 21 and older to enter");
    }
    else{
        document.getElementById("billingInfo").style.display ="block";
        document.getElementById("SignUp-Section").style.display="none";
        document.getElementById("Welcome-Section").style.display="none";
        document.getElementById("CustomerSignUp").style.display="none";
        
    }
    console.log(today);
    console.log(birthdate);    
}