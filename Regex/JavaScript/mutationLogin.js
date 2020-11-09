function validate(){
   var string=document.getElementById("text").value;
   var pattern=/^mutation\s+login+[($]+email+[:]\s+String+[!,]+\s+[$]password+[:]\s*String+[!)]+\s*[{]+\s*login+[(]+email+[:$]+email+[,]+password+[:]+\s*[$]+password+[)]+[{]+\s*[a-z0-9]+\s*[}]+\s*[}]$/gmi;
   if(pattern.test(string)){
       alert("The given string is Valid");
   }
   else{
       alert("The given string is Invalid");
   }
}
/*
mutation<MIN 1 SPACE>login($email:<MIN 1 SPACE>String!, $password:<MIN 1 SPACE>String!) <min 0space>{<MIN 1 SPACE>
  login(email:<MIN 0 SPACE>$email,<MIN 0 SPACE>password:<MIN 0 SPACE>$password){
   <ANY_DATA>
<MIN 0 SPACE>}
<MIN 0 SPACE>}
*/