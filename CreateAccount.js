<script> 
function CreateAccount()                                    
{ 
    var YourEmail = document.forms["CreateAccount"]["YourEmail"];               
    var VerifyEmail = document.forms["CreateAccount"]["VerifyEmail"];    
    var YourName = document.forms["CreateAccount"]["YourName"];  
    var UserName =  document.forms["CreateAccount"]["UserName"];  
    var Password = document.forms["CreateAccount"]["Password"];  
    var VerifyPassword = document.forms["CreateAccount"]["VerifyPassword"];  
    var PasswordHint = document.forms["CreateAccount"]["PasswordHint"];               
    var CardNumber = document.forms["CreateAccount"]["CardNumber"];    
    var CVV = document.forms["CreateAccount"]["CVV"];  
    var ExpirationDate =  document.forms["CreateAccount"]["ExpirationDate"];  
	
    if (YourEmail.value == "")                                  
    { 
        window.alert("Please enter your email."); 
        YourEmail.focus(); 
        return false; 
    } 
   
    if (VerifyEmail.value == "")                               
    { 
        window.alert("Please verify your email address."); 
        VerifyEmail.focus(); 
        return false; 
    } 
       
    if (YourName.value == "")                                   
    { 
        window.alert("Please your name."); 
        YourName.focus(); 
        return false; 
    } 
   
    if (UserName.value == "")                                   
    { 
        window.alert("Please enter a valid User Name."); 
        UserName.focus(); 
        return false; 
    }
   
    if (Password.value == "")                           
    { 
        window.alert("Please enter a Password."); 
        Password.focus(); 
        return false; 
    } 
   
    if (VerifyPassword.value == "")                           
    { 
        window.alert("Please Verify your Password."); 
        VerifyPassword.focus(); 
        return false; 
    } 
   
    if (PasswordHint.value == "")                        
    { 
        window.alert("Please enter a password hint"); 
        PasswordHint.focus(); 
        return false; 
    } 
   
    if (CardNumber.value == "")                        
    { 
        window.alert("Please enter your Card Number"); 
        CardNumber.focus(); 
        return false; 
    } 
	
	if (CVV.value == "")                        
    { 
        window.alert("Please enter your CVV"); 
        CVV.focus(); 
        return false; 
    }
	
	if (ExpirationDate.value == "")                        
    { 
        window.alert("Please enter an Expiration Date"); 
        ExpirationDate.focus(); 
        return false; 
    } 
   
    return true; 
}</script> 