function validate(){
    var str=document.getElementById("hex").value;
    var pattern=/0+x+[0-9A-Fa-f]{32}$/i;
    if(pattern.test(str))
    {
        alert("Valid Hex");
    }
    else
    {
        alert("Invalid Hex");
    }
}