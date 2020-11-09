function validation(){
    var string=document.getElementById("text").value;
    var pattern=/mutation\s+[{]+\s*createPO+[(]+uid:+["]+[a-z0-9]+[",]+document:+[{]+\s*data:+["]+DATA+["]+\s*[},]+txMode:PROTECTED+[,]+isInward+[:]+(false|true)+[)]$/gmi;
    if(pattern.test(string)){
        alert("The given string is Valid");
    }
    else{
        alert("The given string is Invalid");
    }
 }
 /*mutation {
  createPO(uid:"<DATA>",document:{
    data:"<DATA>"
  },txMode:PROTECTED,isInward:false)
}*/