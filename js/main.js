$(document).ready(function() {
  $.getJSON("https://api.meetup.com/Barcelona-free-software?photo-host=public&sig_id=103310792&sig=9cf16f880e9f7b358f584792d1cc83b8f44ff6c0&callback=?", function (response) {
    // Update membership count
    $(".js-members").text(response.data.members)
  });
  
  $.getJSON("https://api.meetup.com/Barcelona-Free-Software/events?desc=true&photo-host=public&page=20&sig_id=103310792&status=past&fields=photo_album&sig=f3ef85dfc4deeae26cc8b29b6bba906dd05cb3fd&callback=?", function(response) {
    // We only want the last six meetups that have a picture
    var meetups = response.data.filter(function(d) { return d.photo_album }).slice(0, 6);
    
    // Add the info for each one
    $.each(meetups, function(i, d) {
      $(".meetupLink")
        .eq(i)
        .attr("href", d.link)
        .text(d.name);
        
      $(".meetup img")
        .eq(i)
        .attr("src", d.photo_album.photo_sample[0].photo_link)
    });      
  });
});
