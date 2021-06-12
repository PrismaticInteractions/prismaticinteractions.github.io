//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/mc.prismatic.cc";

$.getJSON(url, function(r) {
  if(r.error){
      $('#server-info').html('Server Offline');
      return false;
  }

  $('#server-info').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online);
});
