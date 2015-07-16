var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var room = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i<room.length; i += 1) {
      if (room[i].available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += room[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/rooms.json');
xhr.send();