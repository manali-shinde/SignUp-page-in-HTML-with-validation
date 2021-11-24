function formValidation() {
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const upassword = document.getElementById("upassword");
const confirmPassword = document.getElementById("confirmPassword");

// function for form validation

  
  // checking name length
  if (firstname.value.length < 2 || firstname.value.length > 20) {
    alert("Name length should be more than 2 and less than 21");
    firstname.focus();
    return false;
  }
  if (lastname.value.length < 2 || lastname.value.length > 20) {
    alert("Name length should be more than 2 and less than 21");
    lastname.focus();
    return false;
  }
  // checking email
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  // checking password
  if (!upassword.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
    alert("Password should contain 8 characters having a number, lower and upper case and special character.");
    upassword.focus();
    return false;
  }
 
  if(upassword.value != confirmPassword.value){
      alert("Passwords donot match");
      confirmPassword.focus();
      return false;
  }
  return true;
}