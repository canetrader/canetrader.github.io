$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  
  // Slide in elements on scroll
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

  $('body').on('click','#myBtn',function(){
    $("#myModal").show();
  });
  // When the user clicks on <span> (x), close the modal
  document.getElementsByClassName("modal-close")[0].onclick = function() {
      $("#myModal").hide();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        $("#myModal").hide();
    }
  }

})

setTimeout(function() {
var f = document.querySelectorAll('iframe')[0];
f.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.275407528797!2d78.13291584999793!3d11.745637991627472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf73861e65c6f%3A0xcca15ca2b3be6f4a!2sCaneMan+Traders!5e0!3m2!1sen!2sin!4v1527325521354';
}, 2000);
