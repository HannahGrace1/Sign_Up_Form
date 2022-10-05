
let password = document.getElementById('password')
let passord_Confirm = document.getElementById('password_Confirm')


if(password.length > 14) {  
     document.getElementById("placeholder").innerHTML = "**Password length must not exceed 14 characters";  
     return false; 
  }
  if(password.length < 6) {  
     document.getElementById("placeholder").innerHTML = "**Password length must have more than 6 characters";  
     return false;  
  }
if(password_Confirm.length > 14) {  
     document.getElementById("placeholder").innerHTML = "**Password length must not exceed 14 characters";  
     return false; 
  }
  if(password_Confirm.length < 6) {  
     document.getElementById("placeholder").innerHTML = "**Password length must have more than 6 characters";  
     return false;  
  }

