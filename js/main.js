$(document).ready(function() {
  $.getJSON("https://api.meetup.com/Barcelona-free-software?photo-host=public&sig_id=103310792&sig=9cf16f880e9f7b358f584792d1cc83b8f44ff6c0&callback=?", function (response) {
    // Update membership count
    $(".js-members").text(response.data.members)
  });

  $.getJSON("https://api.meetup.com/Barcelona-Free-Software/events?desc=true&photo-host=public&page=20&sig_id=103310792&status=past&fields=photo_album&sig=f3ef85dfc4deeae26cc8b29b6bba906dd05cb3fd&callback=?", function(response) {
    var meetups = response.data.slice(0, 20);

    meetups.forEach(function(d) {
      var date = new Date(d.created);
      var day = date.getUTCDate();
      var month = date.getUTCMonth() + 1; //months from 1-12
      var year = date.getUTCFullYear();

      $(".lastMeetups")
        .append('<li><a class="u-marginRight" href="'+ d.link + '">' + d.name + '</a><small>' + day + '/' + month + '/' + year  + ' @' + d.venue.name + '</small></li>')
    });
  });
});
