<script> 
function Login()                                    
{ 
    var name = document.forms["Login"]["UserName"];                
    var password = document.forms["Login"]["Password"];   
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your UserName."); 
        name.focus(); 
        return false; 
    } 
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
    return true; 
}</script> 