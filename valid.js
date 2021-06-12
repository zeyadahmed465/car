function verifyPassword() {  
    var pass = document.getElementById("password").value;  
    let phone = document.getElementById("telephone").value;  
    //check empty password field  
    if(!phone.match(/^[0-9]{11}$/))
    {
       alert("phone is not Valid");
       return false;
    }
    if(pass.length!=8){
       alert("Please,Password must be 8 characters , must has at least one special char and one digit,The first char must be in upper case , And has No Spaces");
    return false;
    }
    for(let k=0;k<pass.length;k++)
    {
       if(pass[k]==" " && myvalid()==true){alert("The password has No Spaces");return false;}
    }
    if(myvalid()==true)
    {
      if (isNaN(pass * 1) && pass[0]== pass[0].toLowerCase()) {
    
       alert("Please,Password first letter must be capital");
        return false;
     }
     else{alert("pass is correct Click Ok!");return true;}
    } 
    
    else if (isNaN(pass * 1) && pass[0]== pass[0].toUpperCase()&& pass.length==8) {
    
       alert("Password must has at least one special char and one digit");
        return false;
     }
    else {
       alert("The first char must be in upper case  , must has at least one special char and one digit");
       return false;
    }
    }
    
    function myvalid(){
       var flag,b;
       var count=0;
       var count2=0;
       let reg=/^[0-9]$/;
       var str = document.getElementById("password").value;
       for (let i = 0; i < str.length; i++) {
          if(str[i].match("[*.!@$%^&(){}:;<>,./?~_+=|]")){  
             flag=1;
             count++;
            }
            else{
               flag=0;
            }
          }
          for (let j = 0; j<str.length; j++) {
             if(str[j].match(reg))
             {b=1;count2++;}
             else{b=0;}
          }
          console.log(count);
    console.log(count2);
    
    if( count==1 && count2==1){
       return true;
    }
    else{
      return false;
    }
    }