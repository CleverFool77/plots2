$(document).ready(function () {
$("#edit-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password1: {
        required: true,
        minlength: 8
      },
      password2: {
        equalTo: "#password1"
      }
    },
    messages: {
      password1: {
        required: "Please enter password",
        minlength:"Password should be minimum 8 characters long"
      },
      email:{
        required: "Please enter email",        
        email: "Invalid email address"
      },
      password2: {
        required: "Please enter password",
        minlength:"Password should be minimum 8 characters long",
        equalTo: "Passwords doesn't match"
      }    
    }
  });
});