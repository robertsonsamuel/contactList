(function(){
$(document).ready(init);



var tasks = localStorage.contacts ? JSON.parse(localStorage.contacts) : [];

var people = {
  personname:'',
  email:'',
  phone:'',
  address:'',
  checked:false,
  editing:false,
};

function init() {
  $('#add').on('click',addTolist(people));
  $('#remove').on('click',removeContact)
}


function getInfo() {
  people.personname = $('#contactName').val();
  people.email = $('#contactEmail').val();
  people.phone = $('#telephoneNumber').val();
  people.address = $('#address').val();

  $('#contactName').val('').focus();
  $('#contactEmail').val('');
  $('#telephoneNumber').val('');
  $('#address').val('');

  return people;
}




function addTolist(person) {
  var $name = $('<td class="name">' + person.personname  + '</td>');
  var $email = $('<td class="email">'+ person.email + '</td>');
  var $phone = $('<td class="phone">'+ person.phone + '</td>');
  var $address=$('<td class="address">'+person.address + '</td>');
  var $edit = $('<td class="edit" id="edit">'+'<button><i class="fa fa-pencil"></i> Edit</button>'+ '</td>');
  var $remove = $('<td>'+'<button class="remove"><i class="fa fa-minus-circle"></i> Remove</button>'+ '</td>');
  var $row = $('<tr>');
  $('.table').append($row.append($name,$email,$phone,$address,$edit,$remove));
}

function removeContact() {
  console.log("removed clicked")
}






  })();
