function validateUser() {
  let user = document.forms["myForm"]["username"].value; //Declaring variable containing username value

  /* If the username is empty, less than 6, or greater than 10 then the border of the input for the username
   turns red and the message is displayed */
  if (user == "" || user.length < 6 || user.length > 10) {
    document.getElementById("message").style.display = "block";
    document.getElementById("border").style.borderColor = "red";
    return false;
  } else {
    document.getElementById("message").style.display = "none";
    document.getElementById("border").style.borderColor = "black";
    return true;
  }
}

function validateEmail() {
  let email = document.forms["myForm"]["email"].value; // Declaring variable containing email value

  /* Google told me this random string of characters somehow has the correct values to check if an
    email is correct. I tried it and I believe Google. See documentation here:
    https://www.w3resource.com/javascript/form/email-validation.php
    */
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
    document.getElementById("message1").style.display = "block";
    document.getElementById("border1").style.borderColor = "red";
    return false;
  } else {
    document.getElementById("message1").style.display = "none";
    document.getElementById("border1").style.borderColor = "black";
    return true;
  }
}

function validateDropdown() {
  let dropdown = document.forms["myForm"]["position"].value;
  if (dropdown == "") {
    document.getElementById("message2").style.display = "block";
    document.getElementById("position").style.borderColor = "red";
    return false;
  } else {
    document.getElementById("message2").style.display = "none";
    document.getElementById("position").style.borderColor = "black";
    return true;
  }
}

function validateRadio(){
    let radio = document.getElementById("parttime").checked;
    let radio1 = document.getElementById("fulltime").checked;
    if(radio == false & radio1 == false)
    {
        document.getElementById("message3").style.display="block";
        return false;
    }
    else{
        document.getElementById("message3").style.display="none";
        return true;
    }
}