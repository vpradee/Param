function validate(){
    var promise=new Promise(function(resolve,reject){
        var email=document.getElementById("text").value;
        if(isValid(email)){
            resolve();
        }
        else{
            reject();
        }
      });
      promise.then(function(){
        window.open("file:///C:/Users/DELL/Desktop/PARAM-INTERN/Activity/Task-1/page2.html","_self");
      }).
      catch(function(){
        window.alert("Invalid Email or Password");
      });
}
function isValid(mail){
var pattern=/^[a-z0-9]+@[a-z0-9]+\.([a-z]{2,3})$/i;
var result=pattern.test(mail);
return result;
}