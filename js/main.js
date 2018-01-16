$(document).ready(function() {
  $.getJSON("https://api.meetup.com/Barcelona-free-software?photo-host=public&sig_id=103310792&sig=9cf16f880e9f7b358f584792d1cc83b8f44ff6c0&callback=?", function (response) {
    // Update membership count
    $(".js-members").text(response.data.members)
  });

  $.getJSON("https://api.meetup.com/barcelona-free-software/events?desc=true&photo-host=public&page=20&sig_id=103310792&status=upcoming%2Cpast&sig=6753a3f52681dd68a724d452abda5a3292fdb2ea&callback=?", function(response) {
    var upcomingMeetups = response.data.filter(function(d) { return d.status  === 'upcoming'});
    var pastMeetups = response.data.filter(function(d) { return d.status  === 'past'});

    if (upcomingMeetups) {
      $('.upcomingMeetups')
        .append('<h2 class="u-fontMono">Upcoming meetups</h2>')
        .append('<ul class="meetupList"></ul>');

      printMeetups(upcomingMeetups, '.upcomingMeetups');
    }

    printMeetups(pastMeetups, '.lastMeetups');
  });

  function printMeetups(data, selector) {
    data.forEach(function(d) {
      var date = new Date(d.time);
      var day = date.getUTCDate();
      var month = date.getUTCMonth() + 1; //months from 1-12
      var year = date.getUTCFullYear();

      $(selector + ' ul')
        .append('<li><a class="u-marginRight" href="'+ d.link + '">' + d.name + '</a><small>' + day + '/' + month + '/' + year  + ' @<a class="muted" href="https://www.openstreetmap.org/directions?from=&to=' + d.venue.lat + '%2C' + d.venue.lon + '#map=16/' + d.venue.lat + '/' + d.venue.lon + '">' + d.venue.name + '</a></small></li>')
    });
  }
});
