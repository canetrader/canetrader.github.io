$(document).ready(function(){
  $("#contact-name").on("blur keydown change",function(){
    nameValidate();
  });
  $("#contact-email").on("blur keydown change",function(){
    emailValidate();
  });
  $("#contact-comments").on("blur keydown change",function(){
    commentsValidate();
  });
  $("#contact-send").click(function(event){
    nameValidate();
    emailValidate();
    commentsValidate();
    if(nameValidate()&&emailValidate()&&commentsValidate()){
      createUriEncoding();
      clearAll();
    }
    else
      event.preventDefault();
  });
  $('body').on('click','#myBtn',function(){
    $("#myModal").show();
  });
  $('body').on('click','#buyNow',function(){
    $("#send-whatsapp").attr("href", "https://bit.ly/2Im6Evb");
    $("#myModal").show();
  });
  // When the user clicks on <span> (x), close the modal
  document.getElementsByClassName("modal-close")[0].onclick = function() {
    $("#myModal").hide();
    modalReset();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
      $("#myModal").hide();
      modalReset();
    }
  }
});


function nameValidate(){
  if($('#contact-name').val().match("^[A-Za-z .-_']{3,20}$")){
    $("#err-name").text("");
    return true;
  }
  else{
    $("#err-name").text("Enter valid name(3-20) characters only");
    return false;
  }
}

function emailValidate(){
  if($('#contact-email').val().match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")){
    $("#err-email").text("");
    return true;
  }
  else{
    $("#err-email").text("Enter valid email id");
    return false;
  }
}

function commentsValidate(){
  if($('#contact-comments').val().match("^[A-Za-z .,;:-_'\"]{20,300}$")){
    $("#err-comments").text("");
    return true;
  }
  else{
    $("#err-comments").text("Enter 20-300 characters only (special characters not allowed)");
    return false;
  }
}

function clearAll(){
  $('#contact-name').val("");
  $('#contact-email').val("");
  $('#contact-comments').val("");
}

function createUriEncoding(){
  var name = encodeURIComponent($('#contact-name').val());
  var email = encodeURIComponent($('#contact-email').val());
  var comments = encodeURIComponent($('#contact-comments').val());
  var messageLink = "https://api.whatsapp.com/send?phone=918344748485&text=%5F%2AHi%E2%80%9A%2A%5F%0A%5F%2AThis%20is%20a%20voice%20of%20a%20Customer%2A%5F%0A%0A%2AName%2A%20%3A" + name + "%0A%0A%2AEmail%2A%20%3A" + email + "%0A%0A%2AComments%2A%20%3A" + comments;
  
  $("#send-whatsapp").attr("href", messageLink);
  $(".modal-title").text("Thanks for your time..");
  $("#modal-call").hide();
  $("#modal-message").hide();
  $("#send-message-title").text("Hi " + $('#contact-name').val() + ",");
  $("#send-message-content").text("You need whatsapp installed in this device. If yes, please click on below button to send your message")
  $("#myModal").show();
}

function modalReset(){
  $(".modal-title").text("We hope to see you soon!");
  $("#send-whatsapp").attr("href", "https://bit.ly/2Im6Evb");
  $("#modal-call").show();
  $("#modal-message").show();
  $("#send-message-title").text("");
  $("#send-message-content").text("");
}