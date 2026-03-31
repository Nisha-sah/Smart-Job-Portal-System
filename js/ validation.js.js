function validateForm(){

let title = document.forms[0]["title"].value;

if(title == ""){
alert("Title is required");
return false;
}

return true;

}