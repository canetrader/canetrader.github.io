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

  $(document.body).on('touchmove', reviewAppend); // for mobile
  $(window).on('scroll', reviewAppend);

})

var reviewFlag = true;
// callback
function reviewAppend(){ 
  if(reviewFlag === true)
  {
    $("#google-reviews").googlePlaces({
        placeId: 'ChIJb1zmYTj3qzsRSm--s6Jcocw' //Find placeID @: https://developers.google.com/places/place-id
      , render: ['reviews']
      , min_rating: 4
      , max_rows:4
   });
    reviewFlag = false;
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js')
  .then(function() {
    console.log('Service worker registered!');
  });
}