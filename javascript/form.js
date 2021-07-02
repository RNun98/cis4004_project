function validateInfo() {

    // First name
    if(document.signup.fname.value == "" || document.signup.fname.value.length < 2) 
    {
       alert("Please provide your first name!");
       document.signup.fname.focus() ;
       return false;
    }

    if(document.signup.lname.value == "" || document.signup.lname.value.length < 2) 
    {
       alert("Please provide your last name!");
       document.signup.lname.focus() ;
       return false;
    }

    if(document.signup.addr.value == "" || document.signup.addr.value.length < 2)
    {
        alert("Please provide an address!");
        document.signup.addr.value.focus();
        return false;
    }

    // City check
    if(document.signup.city.value = "" || document.signup.city.value.length < 2)
    {
        alert("Please provide a city!");
        document.signup.city.focus();
        return false;
    }
    
    // Zip check
    if(document.signup.zip.value == "" || isNaN(document.signup.zip.value) ||
       document.signup.zip.value.length != 5) 
    {
       alert("Please provide a zip in the format #####.");
       document.signup.zip.focus() ;
       return false;
    }

    // Phone number check
    if(document.signup.number.value == "" || document.signup.number.value.length != 10 ||
    isNaN(document.signup.number.value))
    {
        alert("Please provide a phone number in the format ##########");
        document.signup.number.focus();
    }

    // Radio button check
    var radio = document.getElementsByName("numberType");
    var checked = false;

    for (var i = 0; i < radio.length; i++)
    {
        if (radio[i].checked)
            checked = true;
    }

    if (!check)
    {
        alert("Please provide what your phone number type");
        return false;
    }

    // email check
    if(document.signup.email.value == "") 
    {
       alert("Please provide your Email!");
       document.signup.email.focus() ;
       return false;
    }
     
    return(true);
 }
 
function validateEmail() 
{
   var emailID = document.signup.email.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");

   if (atpos < 1 || (dotpos - atpos < 2)) 
   {
       alert("Please enter correct email ID")
       document.signup.email.focus() ;
       return false;
   }

   return(true);
}	

function validateAll()
{
    return validateInfo() && validateEmail();
}