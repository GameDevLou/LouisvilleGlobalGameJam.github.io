//javaaaaascccccrrrriiiiiipt is awesome.


$(document).ready(function(){
  var gameRepo = "https://api.github.com/repos/ericlathrop/scurry/commits";
  var siteRepo = "https://api.github.com/repos/AlexBezuska/scurrygame.com/commits";
var message = "";
var last = "";

   $.ajax({
        url: gameRepo,
        dataType: 'jsonp',
        success: function(json) {
          
            message = json.data[0].commit.message;
           last = json.meta.LastModified;

            console.log(json);
            console.log(message);
            $('.commitMessage').text("Now With " + message + "!");
            $('.commitMessage-clean').text( message );
            $('.gitHubDate').text( last );
        }
    });
    
});

