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

  $(document.body).on('touchmove', onScroll); // for mobile
  $(window).on('scroll', onScroll); 
  
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

var fired = true;
// callback
function onScroll(){ 
  if(fired === true)
  {
    var f = document.querySelectorAll('iframe')[0];
    f.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.275407528797!2d78.13291584999793!3d11.745637991627472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf73861e65c6f%3A0xcca15ca2b3be6f4a!2sCaneMan+Traders!5e0!3m2!1sen!2sin!4v1527325521354';
    fired = false;
  }
}

function goBack() {
  window.history.back();
}