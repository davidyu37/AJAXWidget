var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange = function () {
  if(xhr1.readyState === 4 && xhr1.status === 200) {
    var employees = JSON.parse(xhr1.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr1.open('GET', '../data/employees.json');
xhr1.send();