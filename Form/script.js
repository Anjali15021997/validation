document.getElementById("submit").addEventListener("click",function(event){
     event.preventDefault();  
    validate();
});

var username = document.getElementById("username");
var pan=document.getElementById("pan")
var email = document.getElementById("email");
var no=document.getElementById("no");

function validate()
{
    var usernameValue = username.value.trim();
    var noValue=no.value.trim();
    var emailValue = email.value.trim();
    var panValue=pan.value.trim();

    if(usernameValue ==='') 
    {
		setError(username, "**blankspace error");
	} 
  
    if(usernameValue=="")
    {
        setError(username,"**fill username");
    }
    else
    {
        setSuccess(username);
    }


    if(noValue=="")
    {
        setError(no,"**fill account no");
    }
    else
    {
        setSuccess(no);
    }

    
    if(panValue ==='') 
    {
		setError(pan, "**blankspace error");
	} 
  
    if(panValue=="")
    {
        setError(pan,"**fill PAN no");
    }
    else
    {
        setSuccess(pan);
    }

    
    if(emailValue=="")
    {
        setError(email,"**fill email");
    }
    // if(!isEmail(emailValue))
    // {
    //     setError(email,"**email is invalid");
    // }
    else{
        setSuccess(email);
    }


}
// function isEmail(e)
//     {
//         var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return reg.test(e);
//     }

function setError(u, msg)  //error
{
var parentBox =  u.parentElement;
parentBox.className="error-field error";
var span =  parentBox.querySelector("span");  //searching span tag
var fa = parentBox.querySelector(".fa");  //icon
span.innerText=msg;
fa.className="fa fa-exclamation-circle";
}

function setSuccess(u)  //success
{
    var parentBox =  u.parentElement;
    parentBox.className="success-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className="fa fa-check-circle";
}


