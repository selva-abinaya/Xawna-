function myfunction (){
    var x=document.getElementById("pass");
    if(x.type === "password"){
        x.type = "text"
    }
    else{
        x.type= "password";
    }
}
function validate()
{
    var password=document.getElementById("pass");
    var lenght=document.getElementById("lenght");

    if(password.value.lenght >=8)
{
    alert("Login succesfully");
    return true;
}
else
{
    alert("Login succesfully");
}
}
