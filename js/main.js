$(document).ready(function() {
    $.getJSON("https://api.meetup.com/Barcelona-free-software?photo-host=public&sig_id=103310792&sig=9cf16f880e9f7b358f584792d1cc83b8f44ff6c0&callback=?", function (response) {
        // Update membership count
        $(".js-members").text(response.data.members)
    });
});
