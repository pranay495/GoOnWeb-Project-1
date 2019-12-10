function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

$(document).ready(function() {
  $(".slider").slider({ full_width: true });
  $('.sidenav').sidenav();
  // $("ul.tab").click(function(){
  //   $(#tab-cont:not(this).hide();
  //   $(this).show();
  // });
  // $(".tab-cont").hide();

  $(document).ready(function(){
    $('ul.tabs').tabs({
      swipeable : true,
      // responsiveThreshold : 1920
    });
  });
});

$(document).ready(function(){
    $('.carousel-slide').carousel();
    $('.carousel-slide').carousel('duration','2000');

  });




// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
//
// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

//
// $(document).ready(function(){
//
// });
